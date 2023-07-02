import React, { useState, useEffect } from 'react'
import { YStack } from 'tamagui'
import i18next from 'i18next'
import { observer } from 'mobx-react'
import { H2, isWeb, XStack } from '@my/ui'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { listItems } from './list'
import { List } from '../components/List'
import { Languages } from 'app/configs/i18next'
import { Content } from 'app/features/components/Content'
import { LanguageSelect } from 'app/features/components/Select'

export const HomeScreen: React.FC = observer(() => {
  const [lang, setLang] = useState(i18next.language)

  const changeLanguage = async (newLang: Languages | string) => {
    try {
      await AsyncStorage.setItem('language', newLang)
      await i18next.changeLanguage(newLang)
      setLang(i18next.language)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    try {
      AsyncStorage.getItem('language').then((savedLanguage) => {
        if (!savedLanguage) return i18next.language
        changeLanguage(savedLanguage)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Content>
      <XStack f={1} ai={'center'} jc={'space-between'} w={'90%'} mb={28} mt={28}>
        {isWeb && (
          <H2 letterSpacing={0} lh={70} ta={'center'}>
            Thailand Driving License
          </H2>
        )}
        <YStack pt={8}>
          <LanguageSelect value={lang} onChange={changeLanguage} />
        </YStack>
      </XStack>
      <List items={listItems} />
    </Content>
  )
})
