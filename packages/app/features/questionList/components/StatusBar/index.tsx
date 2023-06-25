import * as React from 'react'
import { Stack } from '@my/ui'

interface Props {
  value: number
  max?: number
}

export const StatusBar: React.FC<Props> = ({ value, max }) => {
  return (
    <Stack width={'100%'} bw={1} h={8} mb={20} br={4} borderColor={'#999'}>
      <Stack
        w={`${value}%`}
        h={'100%'}
        bc={'#8BC166'}
        style={{
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1);',
        }}
      ></Stack>
    </Stack>
    // <Progress value={value} mb={20} max={max || 100}>
    //     <Progress.Indicator animation="bouncy" />
    // </Progress>
  )
}
