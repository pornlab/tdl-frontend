import * as React from 'react'
import { useLink } from 'solito/link'
import { Button } from '@my/ui'
import i18next from 'i18next'

export interface Props {
  href: string
  text: string
  maxWidth?: boolean
}

export const HeaderButton: React.FC<Props> = ({ href, text, maxWidth = true }) => {
  const goToLink = useLink({
    href,
  })

  return (
    <Button {...goToLink} w={maxWidth ? '100%' : 'auto'} mb={'$4'}>
      {text}
    </Button>
  )
}
