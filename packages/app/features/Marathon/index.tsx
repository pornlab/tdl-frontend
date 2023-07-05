import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  getFavouritesQuestions,
  getMaraphoneQuestions,
  getQuestionsByTheme,
} from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { observer } from 'mobx-react'
import { Questions } from 'app/features/components/Questions'
import { Instance } from 'mobx-state-tree'
import { EmptyState } from 'app/features/Favourites/components/EmptyState'

export const Marathon: React.FC = observer(() => {
  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: [...getMaraphoneQuestions()],
    })
  )

  if (!sessionStore || !sessionStore.questions.length) return <EmptyState />
  return <Questions store={sessionStore} title={'Marathon'} />
})
