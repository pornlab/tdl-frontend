import * as React from 'react'

import { Dimensions } from 'react-native'
import { Stack, XStack, ScrollView, H1, Button } from '@my/ui'
import { QuestionView } from 'app/features/question'
import { useEffect, useRef, useState } from 'react'
import { Question } from 'app/features/dbList/interfaces'
import { Instance } from 'mobx-state-tree'
import { Questions } from '../../../../../business-logic/stores/Question'

const width = Dimensions.get('window')
const height = 700

interface Props {
  current: number
  data: Instance<typeof Questions>
  goToNextQuestion: () => void
}

export const Carousel: React.FC<Props> = ({ data: questions, goToNextQuestion, current }) => {
  const [coords, setCoords] = useState([])
  const questionsRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const coordsQuestions: number[] = [
      0,
      ...questions
        .reduce((arr, question, index) => {
          //@ts-ignore
          const elWidth = questionsRef.current?.children[index]?.children[0].clientWidth
          const elCoords = (arr[index - 1] || 0) + elWidth
          return [...arr, elCoords]
        }, [])
        .slice(0, questions.length),
    ]
    //@ts-ignore
    setCoords(coordsQuestions)
  }, [])

  useEffect(() => {
    //@ts-ignore
    scrollRef.current?.scrollTo({
      x: coords[current - 1],
      animated: true,
    })
  }, [current])

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        w={'100%'}
        ref={scrollRef}
        directionalLockEnabled
        scrollEnabled={false}
      >
        <XStack ref={questionsRef}>
          {questions.map((question, index) => (
            <Stack key={index}>
              <QuestionView data={question} goToNextQuestion={goToNextQuestion} />
            </Stack>
          ))}
        </XStack>
      </ScrollView>
    </>
  )
}
