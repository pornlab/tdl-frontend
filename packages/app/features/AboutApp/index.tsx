import * as React from 'react'
import { YStack, Stack, Button } from '@my/ui'
import { observer } from 'mobx-react'
import { Content } from 'app/features/components/Content'
import { Links } from 'app/features/AboutApp/components/Links'
import { Answers } from 'app/features/AboutApp/components/Answers'
import { Header } from 'app/features/AboutApp/components/Header'
import { useLink } from 'solito/link'

export const AboutApp: React.FC = observer(() => {
  const menuLink = useLink({ href: '/' })
  return (
    <Content>
      <Stack
        f={1}
        jc={'center'}
        ai={'center'}
        ac={'center'}
        style={{ width: '100%' }}
        maxWidth={700}
        pl={16}
        pr={16}
        mb={50}
      >
        <Button w={'100%'} {...menuLink}>
          Вернуться в меню
        </Button>
        <YStack p={16} backgroundColor={'#F0F0F0'} w={'100%'} borderRadius={36} mt={20} pb={40}>
          <Header />
          <Links />
          <Answers />
        </YStack>
      </Stack>
    </Content>
  )
})
