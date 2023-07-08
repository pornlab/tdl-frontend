import * as React from 'react'
import { YStack, Paragraph } from '@my/ui'
import i18next from 'i18next'

export enum LinksTypes {
  ACTUAL = 'actual',
  FREE = 'freeApp',
  LINKS = 'links',
  CONTACTS = 'contacts',
}

export interface LinksMap {
  [linkType: string]: string
}

export const LinksI18n: LinksMap = {
  [LinksTypes.ACTUAL]: i18next.t('about:title.actualQuestions'),
  [LinksTypes.FREE]: i18next.t('about:title.freeApp'),
  [LinksTypes.LINKS]: i18next.t('about:title.linksApp'),
  [LinksTypes.CONTACTS]: i18next.t('about:title.contacts'),
}

export const Links: React.FC = () => {
  return (
    <YStack>
      {Object.values(LinksI18n).map((link) => {
        return (
          <Paragraph color={'#EC892E'} pb={12}>
            {link}
          </Paragraph>
        )
      })}
    </YStack>
  )
}
