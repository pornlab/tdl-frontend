import * as React from 'react'
import { use, useEffect, useState } from 'react'
import { Content } from 'app/features/components/Content'
import { Stack, H1, Button } from '@my/ui'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { Carousel } from 'app/features/questionList/components/Carousel'
import { ToggleBar } from 'app/features/questionList/components/ToggleBar'
import { TitleCounter } from 'app/features/questionList/components/TitleCounter'
import { getAllQuestions, getQuestionsByTheme } from '../dbList/helpers/getTheme'
import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import { createParam } from 'solito'
import { NotFoundQuestion } from 'app/features/question/notFound'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { observer } from 'mobx-react'
import { FinishModal } from 'app/features/questionList/components/FinishModal'
import { Modal } from 'app/features/components/Modal'

interface Props {
  theme: ThemeTypes
}

const { useParam } = createParam<{ id: string }>()

export const QuestionList: React.FC<Props> = observer(({ theme }) => {
  const [id] = useParam('id')
  const [isOpen, setOpenModal] = useState(false)

  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      // questions: id ? getQuestionsByTheme('VehicleLaw'),
      // questions: id ? getQuestionsByTheme(id) : [],
      questions: [...getAllQuestions()],
    })
  )
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
      >
        <StatusBar value={percent()} />
        <TitleCounter
          title={id || ''}
          current={current}
          totalCount={totalCount}
          isAllQuestionAnswered={checkIsAllQuestionsAnswered()}
        />
        <ToggleBar
          current={current}
          totalCount={totalCount}
          onChange={setCurrent}
          questions={questions}
        />
        <Carousel
          data={questions}
          current={current}
          goToNextQuestion={sessionStore.goToNextQuestion}
        />
      </Stack>
      {checkIsAllQuestionsAnswered() && (
        <FinishModal
          totalCount={totalCount}
          rightCount={rightAnswersCount()}
          errorCount={errorAnswersCount()}
          totalTime={'14:45'}
          startAgain={reset}
        />
      )}
    </Content>
  )
})
