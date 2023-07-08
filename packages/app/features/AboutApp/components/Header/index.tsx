import * as React from 'react'
import { H1, YStack, Stack, Button, H4, Paragraph, H2, H3 } from '@my/ui'
import { observer } from 'mobx-react'
import BookIcon from 'app/features/components/icons/book3.png'
import { XStack } from 'tamagui'
import { Image as ImageRN } from 'react-native'
import i18next from 'i18next'

export const Header: React.FC = observer(() => {
  return (
    <XStack
      backgroundColor={'#dedede'}
      br={20}
      mb={'$4'}
      style={{
        transition: 'all 0.1s ease-in-out',
      }}
      width={'100%'}
      marginBottom={50}
    >
      <Stack
        backgroundColor={'#ababab'}
        borderTopLeftRadius={20}
        borderBottomLeftRadius={20}
        p={'$3'}
      >
        <ImageRN
          source={BookIcon}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Stack>
      <YStack f={1} ai={'center'} jc={'center'} flexWrap="nowrap">
        <H3 color={'#484848'} ls={0}>
          {i18next.t('mainMenu:aboutApp')}
        </H3>
      </YStack>
    </XStack>
  )
})
