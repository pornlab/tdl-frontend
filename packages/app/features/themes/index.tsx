import React from 'react'
import { H2, isWeb } from '@my/ui'
import { List } from 'app/features/components/List'
import { Content } from 'app/features/components/Content'
import { themesList } from './list'

export const ThemesScreen: React.FC = () => {
  return (
    <Content>
      {isWeb && (
        <H2 letterSpacing={0} p={'$4'} pt={'$8'} ta={'center'}>
          Themes
        </H2>
      )}
      <List items={themesList} />
    </Content>
  )
}
