import * as React from 'react'

import { Content } from 'app/features/components/Content'
// import { createParam } from "solito";
import { H3, Stack, Paragraph, XStack, YStack } from '@my/ui'
import { NotFoundQuestion } from 'app/features/question/notFound'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import { Instance } from 'mobx-state-tree'
import { Answer, ModeTypes, Question } from '../../../business-logic/stores/Question'

interface Props {
  data: Instance<typeof Question>
}

const { width, height } = Dimensions.get('window')

export const QuestionView: React.FC<Props> = ({ data }) => {
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
      <YStack width={width > 700 ? 668 : width - 32} p={10}>
        <H3 letterSpacing={0} pb={'$6'}>{`${title.en.value}`}</H3>
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
            onPress={() => data.setUserAnswer(index)}
            backgroundColor={getBackground(answer)}
          >
            <Paragraph lh={30} p={'$3'} fontSize={17}>
              {answer.value.en}
            </Paragraph>
          </XStack>
        ))}
        <YStack alignItems={'flex-start'} mt={20}>
          <Stack
            bc={'#7659c3'}
            pl={16}
            pr={16}
            pb={3}
            pt={2}
            hoverStyle={{ cursor: 'pointer' }}
            br={20}
          >
            <Paragraph color={'#fff'} fontWeight={'bold'}>
              Add to favorites ⭐️
            </Paragraph>
          </Stack>
        </YStack>
      </YStack>
    </Content>
  )
}
