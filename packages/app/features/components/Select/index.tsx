import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Adapt, Stack, Select, SelectProps, Sheet, XStack, YStack } from '@my/ui'
import React from 'react'
import { Languages } from 'app/configs/i18next'
import Clock from 'app/features/questionList/components/FinishModal/icons/clock.png'
import { Image as ImageRN } from 'react-native'

import Russian from '../icons/Languages/ru.png'
import English from '../icons/Languages/en.png'
import Franch from '../icons/Languages/fr.png'
import Spanish from '../icons/Languages/es.png'
import Deutch from '../icons/Languages/de.png'

export const LanguagesImages = {
  [Languages.English]: English,
  [Languages.Russian]: Russian,
  [Languages.Franch]: Franch,
  [Languages.Spanish]: Spanish,
  [Languages.Deutch]: Deutch,
}

export interface Props {
  setLang: (v: string) => void
  lang: string
}

export const SIZE_ICON = 24

export const SelectTamagui = (props: SelectProps & Props) => {
  const [val, setVal] = useState('Russian')
  const [activeLanguage, setLanguage] = useState(props.lang)

  return (
    <Select
      id="languages"
      value={props.lang}
      onValueChange={(i) => props.setLang(Languages[i[0].toUpperCase() + i.slice(1)])}
      {...props}
    >
      <Select.Trigger width={'auto'}>
        <ImageRN
          source={LanguagesImages[props.lang]}
          style={{ width: SIZE_ICON, height: SIZE_ICON, borderRadius: 2 }}
        />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={50}>
          <XStack>
            <Select.Group space="$0">
              {Object.keys(Languages).map((item, i) => {
                return (
                  <Select.Item
                    index={i}
                    key={item}
                    value={item.toLowerCase()}
                    hoverStyle={{
                      cursor: 'pointer',
                    }}
                  >
                    <ImageRN
                      source={LanguagesImages[Languages[item]]}
                      style={{ width: SIZE_ICON, height: SIZE_ICON, borderRadius: 2 }}
                    />
                    {/*<Select.ItemText color={'$color'}>{item}</Select.ItemText>*/}
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}
