import * as React from 'react'
import { observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import { Instance } from 'mobx-state-tree'
import { H3, Stack, Paragraph, XStack, YStack } from '@my/ui'

import { Content } from 'app/features/components/Content'
import { Answer, ModeTypes, Question } from '../../../business-logic/stores/Question'
import { Image } from '../components/Image'
import { LanguageSelect } from 'app/features/components/Select'
import i18next from 'i18next'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
  data: Instance<typeof Question>
  goToNextQuestion: () => void
  isExam?: boolean
}

export const QuestionView: React.FC<Props> = observer(({ data, isExam, goToNextQuestion }) => {
  const [language, setLanguage] = useState(i18next.language)
  const [isFavourite, setFavourite] = useState(false)

  useEffect(() => {
    try {
      AsyncStorage.getItem('language').then((savedLanguage) => {
        if (!savedLanguage) return i18next.language
        setLanguage(savedLanguage)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      AsyncStorage.getItem('favourites').then((favourites) => {
        setFavourite(favourites?.includes(data.id.toString()) || false)
      })
    } catch (error) {
      console.log(error)
    }
  }, [data])

  const toggleFavourite = async () => {
    const save = async (value: string) => {
      await AsyncStorage.setItem('favourites', value)
      await AsyncStorage.getItem('favourites').then((favourites) => {
        setFavourite(favourites?.includes(data.id.toString()) || false)
      })
    }

    try {
      const savedFavourites = await AsyncStorage.getItem('favourites')
      if (!savedFavourites || !savedFavourites.length) {
        await save(data.id.toString())
        return
      }

      const parsedQuestions = savedFavourites.split(',').map((i) => +i)

      if (parsedQuestions.includes(data.id)) {
        const filteredQuestions = parsedQuestions.filter((i) => i !== data.id)
        await save(filteredQuestions.toString())
      } else {
        parsedQuestions.push(data.id)
        await save(parsedQuestions.toString())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { title, answers, mode } = data

  const getBackground = (answer: Instance<typeof Answer>) => {
    if (mode === ModeTypes.SHOW_ANSWER) {
      const rightAnswer = Boolean(answer.isAnswer)
      const wrongAnswer = Boolean(answer.isUserAnswer) && !Boolean(answer.isAnswer)
      if (rightAnswer) return '#8bc166'
      if (wrongAnswer) return '#FF5959'
      return '$colorTransparent'
    }
  }

  return (
    <Content>
      {/*<YStack width={width > 700 ? 668 : width - 32} p={10} mb={'$20'}>*/}
      <YStack width={'100%'} mb={'$20'}>
        <H3 letterSpacing={0} pb={'$6'}>{`${title[language].value}`}</H3>
        {data.imageId && <Image id={data.imageId} />}
        {answers.map((answer, index) => (
          <XStack
            mb={'$4'}
            style={{
              transition: 'all 0.1s ease-in-out',
            }}
            hoverStyle={{
              cursor: 'pointer',
            }}
            br={4}
            key={index}
            bw={1}
            borderColor={'#c5c5c5'}
            onPress={() => {
              data.setUserAnswer(index)
              setTimeout(
                () => {
                  goToNextQuestion()
                },
                data.isRightAnswer() || isExam ? 500 : 1000
              )
            }}
            backgroundColor={isExam ? 'transparent' : getBackground(answer)}
            boxShadow={answer.isUserAnswer && isExam ? 'inset 0px 0px 0px 3px #ffbd02' : 'none'}
          >
            <Paragraph lh={30} p={'$3'} fontSize={17}>
              {answer.value[language]}
            </Paragraph>
          </XStack>
        ))}
        <XStack ai={'center'} jc={'space-between'} mt={20}>
          <Stack
            bc={!isFavourite ? '#7659c3' : '#c4597d'}
            pl={16}
            pr={16}
            pb={3}
            pt={2}
            hoverStyle={{ cursor: 'pointer' }}
            br={20}
            onPress={toggleFavourite}
          >
            <Paragraph color={'#fff'} fontWeight={'bold'}>
              {i18next.t(
                !isFavourite ? 'question:addToFavourites' : 'question:removeFromFavourites'
              )}
            </Paragraph>
          </Stack>
          <LanguageSelect value={language} onChange={setLanguage} />
        </XStack>
      </YStack>
    </Content>
  )
})
