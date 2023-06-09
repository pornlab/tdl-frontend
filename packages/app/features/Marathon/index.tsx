import * as React from 'react'
import { useState } from 'react'
import { observer } from 'mobx-react'
import i18next from 'i18next'

import { Questions } from 'app/features/components/Questions'
import { getMaraphoneQuestions } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { getTimerValue, TimerMode, useTimer } from 'app/features/components/Questions/timer'

export const Marathon: React.FC = observer(() => {
  const timer = useTimer(0, TimerMode.DEFAULT)
  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: getMaraphoneQuestions(),
      stopTimer: timer.stop,
      restartTimer: timer.restart,
    })
  )

  return (
    <Questions
      time={getTimerValue(timer.value)}
      store={sessionStore}
      title={i18next.t('mainMenu:marathon')}
    />
  )
})
