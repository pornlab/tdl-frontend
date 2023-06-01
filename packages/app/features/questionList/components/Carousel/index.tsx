import * as React from 'react'

import { Dimensions } from 'react-native'
import { Stack, Button, ScrollView } from '@my/ui'
import { QuestionView } from 'app/features/question'
import { useRef, useState } from 'react'
import { Question } from 'app/features/dbList/interfaces'
import { Instance } from 'mobx-state-tree'
import { Questions } from '../../../../../business-logic/stores/Question'

const width = Dimensions.get('window')
const height = 700

interface Props {
  data: Instance<typeof Questions>
}

export const Carousel: React.FC<Props> = ({ data: questions }) => {
  // const [activeQuestion, setActiveQuestion] = useState("1");
  // const scrollRef = useRef<typeof ScrollView>(null);
  //
  // const setActQ = (val: string) => {
  //     if (!el) return;
  //     const elQuest = el[+val-1];
  //     if (!elQuest) return;
  //     elQuest.scrollIntoView()
  //     setActiveQuestion(val);
  // }

  // const onPressTouch = () => {
  //     // console.log('scrollRef', scrollRef)
  //     scrollRef.current?.scrollTo({
  //         x: 1000,
  //         animated: true,
  //     });
  // }

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        w={'100%'}
        directionalLockEnabled
        // ref={scrollRef}
      >
        {questions.map((question, index) => (
          <Stack key={index}>
            <QuestionView data={question} />
            {/*<Button onPress={onPressTouch}>onPressTouch</Button>*/}
          </Stack>
        ))}
      </ScrollView>
    </>
  )
}
