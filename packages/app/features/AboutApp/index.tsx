import * as React from 'react'
import i18next from 'i18next'
import { observer } from 'mobx-react'
import { Link } from 'solito/link'
import { YStack, Stack, Paragraph } from '@my/ui'

import { Content } from 'app/features/components/Content'
import { Links } from 'app/features/AboutApp/components/Links'
import { Answers } from 'app/features/AboutApp/components/Answers'
import { Header } from 'app/features/AboutApp/components/Header'
import { HeaderButton } from 'app/features/components/HeaderButton'

export const AboutApp: React.FC = observer(() => {
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
        <HeaderButton href={'/'} text={i18next.t('question:goToMenu')} />
        <YStack p={16} backgroundColor={'#F0F0F0'} w={'100%'} borderRadius={36} mt={20} pb={40}>
          <Header />
          <Links />
          <Answers />
        </YStack>
      </Stack>
      <Paragraph mb={40}>
        <Link href="https://www.flaticon.com/authors/xnimrodx" title="Icons">
          Icons created by xnimrodx - Flaticon
        </Link>
      </Paragraph>
    </Content>
  )
})
