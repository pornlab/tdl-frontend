import * as React from 'react'
import { ScrollView } from '@my/ui'
import { Cell, CellType } from 'app/features/questionList/components/ToggleBar/Cells'

interface Props {
  current: number
  totalCount: number
  onChange: (value: number) => void
}

export const ToggleBar: React.FC<Props> = ({ current, totalCount, onChange }) => {
  const numbers = Array.from({ length: totalCount }, (_, index) => index + 1)
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
      }}
      scrollEventThrottle={200}
    >
      {numbers.map((questionNumber) => {
        const isFirst = questionNumber === 1
        const isLast = questionNumber === totalCount
        if (questionNumber === current)
          return (
            <Cell
              value={current}
              key={current}
              onClick={onChange}
              type={CellType.Active}
              isFirst={isFirst}
              isLast={isLast}
            />
          )
        else
          return (
            <Cell
              value={questionNumber}
              key={questionNumber}
              onClick={onChange}
              type={CellType.Base}
              isFirst={isFirst}
              isLast={isLast}
            />
          )
      })}
    </ScrollView>
  )
}
