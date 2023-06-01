import * as React from 'react'

import { Dimensions } from 'react-native'
import { Stack, Button, ScrollView } from '@my/ui'
import { QuestionView } from 'app/features/question'
import { useRef, useState } from 'react'
import { Question } from 'app/features/dbList/interfaces'

const width = Dimensions.get('window')
const height = 700

interface Props {
  data: Question[]
}

export const Carousel: React.FC<Props> = ({ data: questions }) => {
  // const [activeQuestion, setActiveQuestion] = useState("1");
  // const scrollRef = useRef<typeof ScrollView>(null);
  //
  // const setActQ = (val: string) => {
  //     const el = document.getElementsByClassName('question');
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
        onScrollToTop={(e) => console.log(e)}
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
