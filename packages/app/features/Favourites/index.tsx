import * as React from 'react'
import { useState } from 'react'
import { getFavouritesQuestions } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { observer } from 'mobx-react'
import { Questions } from 'app/features/components/Questions'

export const Favourites: React.FC = observer(() => {
  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: getFavouritesQuestions(),
    })
  )
  return <Questions store={sessionStore} title={'Favourites'} />
})
//
