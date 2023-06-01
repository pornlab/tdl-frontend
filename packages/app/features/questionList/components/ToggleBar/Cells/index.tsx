import * as React from 'react'
import { Stack, H4 } from '@my/ui'
import { getStyle } from 'app/features/questionList/components/ToggleBar/Cells/styles'

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
}

export const Cell: React.FC<Props> = ({ value, type, onClick }) => {
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
    >
      <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>
        {value}
      </H4>
    </Stack>
  )
}
