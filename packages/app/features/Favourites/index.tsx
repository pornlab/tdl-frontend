import * as React from 'react'
import { useEffect, useState } from 'react'
import { getFavouritesQuestions } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { observer } from 'mobx-react'
import { Questions } from 'app/features/components/Questions'
import { Instance } from 'mobx-state-tree'
import { EmptyState } from 'app/features/Favourites/components/EmptyState'

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
  return <Questions store={sessionStore} title={'Favourites'} />
})
