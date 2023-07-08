import * as React from 'react'
import { YStack, Paragraph, H3 } from '@my/ui'
import i18next from 'i18next'
import { LinksTypes } from 'app/features/AboutApp/components/Links'

export interface IAnswer {
  title: string
  description: string
}

export interface IAnswersMap {
  [linkType: string]: IAnswer
}

export const AnswersMap: IAnswersMap = {
  [LinksTypes.ACTUAL]: {
    title: i18next.t('about:title.actualQuestions'),
    description: i18next.t('about:answers.actualQuestions'),
  },
  [LinksTypes.FREE]: {
    title: i18next.t('about:title.freeApp'),
    description: i18next.t('about:answers.freeApp'),
  },
  [LinksTypes.LINKS]: {
    title: i18next.t('about:title.linksApp'),
    description: i18next.t('about:answers.linksApp'),
  },
  [LinksTypes.CONTACTS]: {
    title: i18next.t('about:title.contacts'),
    description: i18next.t('about:answers.contacts'),
  },
}

export const Answers: React.FC = () => {
  return (
    <YStack>
      {Object.values(AnswersMap).map(({ title, description }: IAnswer) => {
        return (
          <YStack pt={80}>
            <H3 color={'#343434'} ta={'center'}>
              {title}
            </H3>
            <Paragraph color={'#343434'} pt={20}>
              {description}
            </Paragraph>
          </YStack>
        )
      })}
    </YStack>
  )
}
