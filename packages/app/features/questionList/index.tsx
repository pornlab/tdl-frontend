import i18next from 'i18next'
import * as React from 'react'
import { useState } from 'react'
import { createParam } from 'solito'
import { observer } from 'mobx-react'
import { useLink } from 'solito/link'
import { Stack, Button } from '@my/ui'
import { useRouter } from 'solito/router'

import { Content } from 'app/features/components/Content'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { ToggleBar } from 'app/features/questionList/components/ToggleBar'
import { TitleCounter } from 'app/features/questionList/components/TitleCounter'
import { getQuestionsByTheme } from '../dbList/helpers/getTheme'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { FinishModal } from 'app/features/questionList/components/FinishModal'
import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import { QuestionView } from 'app/features/question'

interface Props {
  theme: string
  questions: Question[]
}

const { useParam } = createParam<{ id: string }>()

export const QuestionList: React.FC<Props> = observer(({ theme }) => {
  const [id] = useParam('id')
  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: [...getQuestionsByTheme(id)],
    })
  )
  const { push, replace, back, parseNextPath } = useRouter()
  if (id !== 'test')
    if (!sessionStore.questions.length || !id || !Object.values(ThemeTypes).includes(id)) {
      push('/')
      return null
    }

  const {
    questions,
    current,
    totalCount,
    percent,
    setCurrent,
    rightAnswersCount,
    errorAnswersCount,
    checkIsAllQuestionsAnswered,
    reset,
  } = sessionStore

  const menuLink = useLink({ href: '/' })

  return (
    <Content>
      {sessionStore.checkIsAllQuestionsAnswered() && (
        <Button mb={'$4'} w={'90%'} {...menuLink}>
          {i18next.t('question:goToMenu')}
        </Button>
      )}
      <Stack
        f={1}
        jc={'center'}
        ai={'center'}
        ac={'center'}
        style={{ width: '100%' }}
        maxWidth={700}
        pl={16}
        pr={16}
      >
        <StatusBar value={percent()} />
        <TitleCounter title={i18next.t(`themes:${id}`)} current={current} totalCount={totalCount} />
        <ToggleBar
          current={current}
          totalCount={totalCount}
          onChange={setCurrent}
          questions={questions}
        />
        <QuestionView
          data={questions[current - 1]}
          goToNextQuestion={sessionStore.goToNextQuestion}
        />
        {/*<Carousel*/}
        {/*  data={questions}*/}
        {/*  current={current}*/}
        {/*  goToNextQuestion={sessionStore.goToNextQuestion}*/}
        {/*/>*/}
      </Stack>
      {checkIsAllQuestionsAnswered() && (
        <FinishModal
          totalCount={totalCount}
          rightCount={rightAnswersCount()}
          errorCount={errorAnswersCount()}
          // totalTime={'14:45'}
          startAgain={reset}
        />
      )}
    </Content>
  )
})
