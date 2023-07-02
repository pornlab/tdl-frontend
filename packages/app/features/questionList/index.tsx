import * as React from 'react'
import { useEffect, useState } from 'react'

import { Content } from 'app/features/components/Content'
import { Stack, Button } from '@my/ui'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { Carousel } from 'app/features/questionList/components/Carousel'
import { ToggleBar } from 'app/features/questionList/components/ToggleBar'
import { TitleCounter } from 'app/features/questionList/components/TitleCounter'
import { getAllQuestions, getQuestionsByTheme } from '../dbList/helpers/getTheme'
import { createParam } from 'solito'
import { defaultSessionSnapshot, Session } from '../../../business-logic/stores/Session'
import { FinishModal } from 'app/features/questionList/components/FinishModal'
import i18next from 'i18next'
import { observer } from 'mobx-react'
import { Languages } from 'app/configs/i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLink } from 'solito/link'
import { ThemeTypes } from 'app/features/dbList/interfaces'
import { useRouter } from 'solito/router'

interface Props {
  theme: string
}

const { useParam } = createParam<{ id: string }>()

export const QuestionList: React.FC<Props> = observer(({ theme }) => {
  const [id] = useParam('id')
  const { push, replace, back, parseNextPath } = useRouter()
  if (id !== 'test')
    if (!id || !Object.values(ThemeTypes).includes(id)) {
      push('/')
      return null
    }

  const [sessionStore, setSessionStore] = useState(
    Session.create(defaultSessionSnapshot, {
      questions: [...getQuestionsByTheme(id)],
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
        <TitleCounter
          title={i18next.t(`themes:${id}`)}
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
