import React from 'react'
import { H2, isWeb } from '@my/ui'
import { List } from 'app/features/components/List'
import { Content } from 'app/features/components/Content'
import { themesList } from './list'
import i18next from 'i18next'
import { observer } from 'mobx-react'

export const ThemesScreen: React.FC = observer(() => {
  return (
    <Content>
      {isWeb && (
        <H2 letterSpacing={0} p={'$4'} pt={'$8'} ta={'center'}>
          {i18next.t('themes:title')}
        </H2>
      )}
      <List items={themesList} />
    </Content>
  )
})
