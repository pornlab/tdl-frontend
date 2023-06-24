import * as React from 'react'

import { Content } from 'app/features/components/Content'
import { XStack, H2, Stack, H4 } from '@my/ui'
import { AlignCenter, AlignLeft, AlignRight } from '@tamagui/lucide-icons'
import { useColorScheme } from 'react-native'

interface Props {
  title: string
  current: number
  totalCount: number
  isAllQuestionAnswered: boolean
}

export const TitleCounter: React.FC<Props> = ({
  title,
  current,
  totalCount,
  isAllQuestionAnswered,
}) => {
  return (
    <Stack f={1} fd={'row'} jc={'space-between'} w={'100%'} pb={20} ai={'center'}>
      <H2 ta={'left'} letterSpacing={0}>
        {title}
      </H2>
      <Stack bc={'#8BC166'} pt={4} pr={12} pb={4} pl={16} bblr={24} btlr={24}>
        <H4 color={'#fff'}>{`${current} / ${totalCount}`}</H4>
      </Stack>
    </Stack>
  )
}
