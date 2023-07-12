import * as React from 'react'
import { observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import { Instance } from 'mobx-state-tree'
import { useEffect, useRef, useState } from 'react'

import { ScrollView, XStack } from '@my/ui'
import { Cell, getCellType } from 'app/features/questionList/components/ToggleBar/Cells'
import { Questions } from '../../../../../business-logic/stores/Question'

interface Props {
  current: number
  totalCount: number
  onChange: (value: number) => void
  questions: Instance<typeof Questions>
  isExam?: boolean
}

export const ToggleBar: React.FC<Props> = observer(
  ({ current, isExam, totalCount, onChange, questions }) => {
    const [numbers, setNumber] = useState(
      Array.from({ length: totalCount }, (_, index) => index + 1)
    )
    const [coords, setCoords] = useState([])
    const scrollRef = useRef(null)
    const numbersRef = useRef(null)

    useEffect(() => {
      const coordsQuestions: number[] = [
        0,
        ...numbers.reduce((arr, number, index) => {
          //@ts-ignore
          const elWidth =
            (numbersRef &&
              numbersRef.current &&
              numbersRef.current?.children &&
              numbersRef.current?.children[number]?.children[0]?.clientWidth) ||
            0
          const elCoords = (arr[index - 1] || 0) + elWidth
          return [...arr, elCoords]
        }, []),
      ].slice(0, totalCount)
      //@ts-ignore
      setCoords(coordsQuestions)
    }, [numbers, current])

    useEffect(() => goToCell(current), [current])

    const goToCell = (value: number) => {
      const { width } = Dimensions.get('window')
      const widthScreen = width < 700 ? width : 700
      onChange(value)
      const valCell = value - 1
      //@ts-ignore
      const elWidth =
        (numbersRef &&
          numbersRef.current &&
          numbersRef.current?.children &&
          numbersRef.current?.children[valCell]?.children[0]?.clientWidth) ||
        0
      //@ts-ignore
      scrollRef.current?.scrollTo({
        x: coords[valCell] - widthScreen / 2 + elWidth / 2,
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
                    isExam={isExam}
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
                    isExam={isExam}
                  />
                )
            })}
          </XStack>
        </ScrollView>
      </>
    )
  }
)
