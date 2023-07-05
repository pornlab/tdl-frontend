import * as React from 'react'
import { useEffect, useState } from 'react'
import { getFavouritesQuestions } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { observer } from 'mobx-react'
import { Questions } from 'app/features/components/Questions'
import { Instance } from 'mobx-state-tree'

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

  if (!sessionStore || !sessionStore.questions.length) return <h1>EmptyState</h1>
  // return <h1>ready</h1>
  return <Questions store={sessionStore} title={'Favourites'} />
})
//
