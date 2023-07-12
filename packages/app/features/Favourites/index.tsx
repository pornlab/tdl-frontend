import * as React from 'react'
import { observer } from 'mobx-react'
import { Instance } from 'mobx-state-tree'
import { useEffect, useState } from 'react'
import i18next from 'i18next'

import { EmptyState } from 'app/features/Favourites/components/EmptyState'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { getFavouritesQuestions } from '../dbList/helpers/getTheme'
import { Questions } from 'app/features/components/Questions'

export const Favourites: React.FC = observer(() => {
  const [sessionStore, setSessionStore] = useState<Instance<typeof Session>>(defaultSessionSnapshot)

  useEffect(() => {
    getFavouritesQuestions().then((questions) =>
      setSessionStore(
        Session.create(defaultSessionSnapshot, {
          questions,
        })
      )
    )
  }, [])

  if (!sessionStore || !sessionStore.questions.length) return <EmptyState />
  return <Questions store={sessionStore} title={i18next.t('mainMenu:favourites')} />
})
