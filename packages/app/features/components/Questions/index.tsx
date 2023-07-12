import * as React from 'react'
import i18next from 'i18next'
import { observer } from 'mobx-react'
import { Stack } from '@my/ui'
import { Instance } from 'mobx-state-tree'

import { Session } from '../../../../business-logic/stores/Session'

import { Content } from 'app/features/components/Content'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { ToggleBar } from 'app/features/questionList/components/ToggleBar'
import { TitleCounter } from 'app/features/questionList/components/TitleCounter'
import { FinishModal } from 'app/features/questionList/components/FinishModal'

import { QuestionView } from 'app/features/question'
import { HeaderButton } from 'app/features/components/HeaderButton'

interface Props {
  store: Instance<typeof Session>
  title: string
  time?: string
}

export const Questions: React.FC<Props> = observer(({ store, time, title }) => {
  const {
    questions,
    current,
    totalCount,
    percent,
    setCurrent,
    rightAnswersCount,
    errorAnswersCount,
    checkIsAllQuestionsAnswered,
    goToNextQuestion,
    reset,
  } = store

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
        {checkIsAllQuestionsAnswered() && (
          <HeaderButton href={'/'} text={i18next.t('question:goToMenu')} />
        )}
        <StatusBar value={percent()} />
        <TitleCounter time={time} title={title} current={current} totalCount={totalCount} />
        <ToggleBar
          current={current}
          totalCount={totalCount}
          onChange={setCurrent}
          questions={questions}
          isExam={store.isExam}
        />
        <QuestionView
          data={questions[current - 1]}
          goToNextQuestion={goToNextQuestion}
          isExam={store.isExam}
        />
      </Stack>
      {checkIsAllQuestionsAnswered() && (
        <FinishModal
          totalCount={totalCount}
          rightCount={rightAnswersCount()}
          errorCount={errorAnswersCount()}
          startAgain={reset}
          totalTime={time}
          title={
            store.isExam
              ? store.isExamResultSuccess()
                ? i18next.t('question:examSuccess')
                : i18next.t('question:examNotSuccess')
              : undefined
          }
          description={
            store.isExam
              ? store.isExamResultSuccess()
                ? i18next.t('question:examSuccessDescription')
                : i18next.t('question:examNotSuccessDescription')
              : undefined
          }
        />
      )}
    </Content>
  )
})
