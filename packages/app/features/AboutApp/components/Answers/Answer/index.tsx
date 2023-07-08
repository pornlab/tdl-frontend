import * as React from 'react'
import { YStack, Paragraph, H3 } from '@my/ui'
import i18next from 'i18next'

export interface IAnswer {
  title: string
  description: string
}

export const Answer: React.FC<IAnswer> = ({ title, description }) => {
  return (
    <YStack>
      <H3>{title}</H3>
      <Paragraph>{description}</Paragraph>
    </YStack>
  )
}
