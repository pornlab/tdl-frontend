import React, { useState } from 'react'
import { H2, isWeb, Button, XStack } from '@my/ui'
import { listItems } from './list'
import { List } from '../components/List'
import { Content } from 'app/features/components/Content'
import i18next from 'i18next'
import { Languages } from 'app/configs/i18next'
import { SelectTamagui } from 'app/features/components/Select'
import { YStack } from 'tamagui'

export const HomeScreen: React.FC = () => {
  const [lang, setLang] = useState(i18next.language)

  const changeLanguage = (newLang: Languages) => {
    i18next.changeLanguage(newLang).then(() => setLang(i18next.language))
  }

  return (
    <Content>
      <XStack f={1} ai={'center'} jc={'space-between'} w={'90%'} mb={28} mt={28}>
        {isWeb && (
          <H2 letterSpacing={0} lh={70} ta={'center'}>
            Thailand Driving License
          </H2>
        )}
        <YStack pt={8}>
          <SelectTamagui lang={lang} setLang={changeLanguage} />
        </YStack>
      </XStack>
      <List items={listItems} />
      {/*<Button*/}
      {/*  onPress={() =>*/}
      {/*    i18next.changeLanguage(Languages.Russian).then(() => setLang(i18next.language))*/}
      {/*  }*/}
      {/*>*/}
      {/*  Russian*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  onPress={() =>*/}
      {/*    i18next.changeLanguage(Languages.English).then(() => setLang(i18next.language))*/}
      {/*  }*/}
      {/*>*/}
      {/*  English*/}
      {/*</Button>*/}
    </Content>
  )
}
