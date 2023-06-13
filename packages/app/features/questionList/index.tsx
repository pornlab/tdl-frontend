import * as React from 'react'
import { useEffect, useState } from 'react'
import { Content } from 'app/features/components/Content'
import { Stack, H1 } from '@my/ui'
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

interface Props {
  theme: ThemeTypes
}

const { useParam } = createParam<{ id: string }>()

export const QuestionList: React.FC<Props> = observer(({ theme }) => {
  const [id] = useParam('id')

  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      // questions: id ? getQuestionsByTheme('VehicleLaw'),
      // questions: id ? getQuestionsByTheme(id) : [],
      questions: [...getAllQuestions(), ...getAllQuestions()],
    })
  )
  const { questions, current, totalCount, percent, setCurrent } = sessionStore
  return (
    <Content>
      {/*{!sessionStore.checkIsAllQuestionsAnswered() && <FinishModal />}*/}
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
        <TitleCounter title={id || ''} current={current} totalCount={totalCount} />
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
      <FinishModal />
    </Content>
  )
})
