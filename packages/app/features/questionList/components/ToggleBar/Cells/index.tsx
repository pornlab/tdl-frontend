import * as React from 'react'
import { Stack, H4 } from '@my/ui'
import { getStyle } from 'app/features/questionList/components/ToggleBar/Cells/styles'
import { Instance } from 'mobx-state-tree'
import { Questions } from '../../../../../../business-logic/stores/Question'

export enum CellType {
  Base,
  Success,
  Active,
  Error,
}

interface Props {
  value: number
  type: CellType
  onClick: (value: number) => void
  isFirst: boolean
  isLast: boolean
}

export const getCellType = (current: number, questions: Instance<typeof Questions>): CellType => {
  const currentQuestion = questions[current]
  if (!currentQuestion) return CellType.Base

  const isRight = currentQuestion.answers.reduce((arr, answer) => {
    return arr || (answer.isAnswer && answer.isUserAnswer)
  }, false)
  if (isRight) return CellType.Success

  const isWrong = currentQuestion.answers.reduce((arr, answer) => {
    return arr || (answer.isUserAnswer && !answer.isAnswer)
  }, false)
  if (isWrong) return CellType.Error

  return CellType.Base
}

export const Cell: React.FC<Props> = ({ value, type, onClick, isFirst, isLast }) => {
  const onPress = () => onClick(value)
  const style = getStyle(type)

  return (
    <Stack
      minWidth={40}
      borderColor={'black'}
      bw={1}
      onPress={onPress}
      style={style}
      hoverStyle={{
        cursor: 'pointer',
      }}
      btlr={isFirst ? 10 : 0}
      bblr={isFirst ? 10 : 0}
      btrr={isLast ? 10 : 0}
      bbrr={isLast ? 10 : 0}
    >
      <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>
        {value}
      </H4>
    </Stack>
  )
}
