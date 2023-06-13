import * as React from 'react'
import { ScrollView, Button, XStack, Stack } from '@my/ui'
import { Cell, CellType, getCellType } from 'app/features/questionList/components/ToggleBar/Cells'
import { Instance } from 'mobx-state-tree'
import { Answer, ModeTypes, Questions } from '../../../../../business-logic/stores/Question'
import { useEffect, useRef, useState } from 'react'
import { set } from 'mobx'
import { Dimensions } from 'react-native'

interface Props {
  current: number
  totalCount: number
  onChange: (value: number) => void
  questions: Instance<typeof Questions>
}

const { width: widthScreen, height } = Dimensions.get('window')

export const ToggleBar: React.FC<Props> = ({ current, totalCount, onChange, questions }) => {
  const [numbers, setNumber] = useState(Array.from({ length: totalCount }, (_, index) => index + 1))
  const [coords, setCoords] = useState([])
  const scrollRef = useRef(null)
  const numbersRef = useRef(null)

  useEffect(() => {
    const coordsQuestions: number[] = [
      0,
      ...numbers.reduce((arr, number, index) => {
        //@ts-ignore
        const elWidth =
          numbersRef &&
          numbersRef.current &&
          numbersRef.current?.children &&
          numbersRef.current?.children[number]?.children[0]?.clientWidth
        const elCoords = (arr[index - 1] || 0) + elWidth
        return [...arr, elCoords]
      }, []),
    ].slice(0, totalCount)
    //@ts-ignore
    setCoords(coordsQuestions)
  }, [numbers])

  useEffect(() => {
    goToCell(current)
  }, [current])

  const goToCell = (value: number) => {
    onChange(value)
    const valCell = value - 1
    //@ts-ignore
    const elWidth =
      numbersRef &&
      numbersRef.current &&
      numbersRef.current?.children &&
      numbersRef.current?.children[valCell]?.children[0]?.clientWidth
    //@ts-ignore
    scrollRef.current?.scrollTo({
      x: coords[valCell] - widthScreen / 2 + elWidth,
      animated: true,
    })
  }

  return (
    <>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: '100%',
        }}
        scrollEventThrottle={200}
      >
        <XStack ref={numbersRef}>
          {numbers.map((questionNumber) => {
            const isFirst = questionNumber === 1
            const isLast = questionNumber === totalCount
            if (questionNumber === current)
              return (
                <Cell
                  value={current}
                  key={current}
                  onClick={onChange}
                  type={getCellType(questionNumber - 1, questions)}
                  isFirst={isFirst}
                  isLast={isLast}
                  isActive
                />
              )
            else
              return (
                <Cell
                  value={questionNumber}
                  key={questionNumber}
                  onClick={onChange}
                  type={getCellType(questionNumber - 1, questions)}
                  isFirst={isFirst}
                  isLast={isLast}
                />
              )
          })}
        </XStack>
      </ScrollView>
    </>
  )
}
