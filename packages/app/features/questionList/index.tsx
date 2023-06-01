import * as React from 'react'

import { Questions } from '../../../business-logic/tests/interfaces'
import { Content } from 'app/features/components/Content'
import { Stack } from '@my/ui'
import { StatusBar } from 'app/features/questionList/components/StatusBar'
import { Carousel } from 'app/features/questionList/components/Carousel'
import { ToggleBar } from 'app/features/questionList/components/ToggleBar'
import { TitleCounter } from 'app/features/questionList/components/TitleCounter'
import { getQuestionsByTheme, ThemeTypes } from '../dbList/helpers/getTheme'
import { useState } from 'react'

interface Props {
  data: Questions
}

export const QuestionList: React.FC<Props> = ({ data }) => {
  const [questions, setQuestionList] = useState(getQuestionsByTheme(ThemeTypes.RoadTrafficLaw))
  console.log('questions', questions)
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
        <StatusBar value={30} />
        <TitleCounter title={'Road Traffic Law'} />
        <ToggleBar />
        <Carousel />
      </Stack>
    </Content>
  )
}
