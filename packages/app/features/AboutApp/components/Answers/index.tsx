import * as React from 'react'
import { YStack, Paragraph, H3, H2 } from '@my/ui'
import i18next from 'i18next'
import { LinksTypes } from 'app/features/AboutApp/components/Links'
import { IAnswer } from 'app/features/AboutApp/components/Answers/Answer'

export interface IAnswersMap {
  [linkType: string]: IAnswer
}

export const AnswersMap: IAnswersMap = {
  [LinksTypes.ACTUAL]: {
    title: i18next.t('Актуальность вопросов'),
    description: i18next.t(
      'На данный момент вопросы являются актуальными на 2020 год. Однако этого достаточно для обучения, так как многие вопросы схожие. К сожалению, я не смог получить актуальный список в автошколе на острове Самуи. Как только это удастся, я обязательно размещу их на сайте и в приложении'
    ),
  },
  [LinksTypes.FREE]: {
    title: i18next.t('Приложение бесплатное?'),
    description: i18next.t(
      'На данный момент все функции приложения бесплатны. Когда я готовился к экзамену, было сложно найти хороший бесплатный ресурс для обучения. Я не преследую цель заработка в этом приложении'
    ),
  },
  [LinksTypes.LINKS]: {
    title: i18next.t('Ссылка на сайт / приложение'),
    description: i18next.t(
      'Сайт: https://develop.tdlb.site App Store: [подготовка к релизу] Google Play: [подготовка к релизу]'
    ),
  },
  [LinksTypes.CONTACTS]: {
    title: i18next.t('Контакты для связи'),
    description: i18next.t('Telegram: https://t.me/hard_dev\n' + 'Почта: moonysl@icloud.com'),
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
