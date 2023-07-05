import * as React from 'react'
import { YStack, Stack, Button, H1, Paragraph, Text } from '@my/ui'
import EmptyStateIcon from '../../../components/icons/emptyState.png'
import { Image as ImageRN } from 'react-native'
import { useLink } from 'solito/link'

export const EmptyState: React.FC = () => {
  return (
    <Stack f={1} ai={'center'} p={32}>
      <YStack maxWidth={400} f={1} ai={'center'} h={'80%'} justifyContent={'center'}>
        <ImageRN source={EmptyStateIcon} style={{ marginBottom: 32, width: 100, height: 100 }} />
        <H1 mb={20} letterSpacing={0} ta={'center'}>
          Ничего нет...
        </H1>
        <Paragraph mb={32} ta={'center'}>
          Проходите тестирование и добавляйте сложные вопросы в{' '}
          <Text
            backgroundColor={'#7659c3'}
            pt={4}
            pb={4}
            pl={8}
            pr={8}
            fontFamily="$body"
            borderRadius={10}
          >
            Избранное ⭐️
          </Text>
        </Paragraph>
        <Button
          {...useLink({
            href: '/',
          })}
        >
          Вернуться в меню
        </Button>
      </YStack>
    </Stack>
  )
}
