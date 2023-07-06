import * as React from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react'

import { Questions } from 'app/features/components/Questions'
import { getExamQuestions } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { getTimerValue, TimerMode, useTimer } from 'app/features/components/Questions/timer'

export const Exam: React.FC = observer(() => {
  const timer = useTimer(3600, TimerMode.EXAM)
  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: [...getExamQuestions()],
    })
  )

  return <Questions time={getTimerValue(timer)} store={sessionStore} title={'Exam'} />
})
