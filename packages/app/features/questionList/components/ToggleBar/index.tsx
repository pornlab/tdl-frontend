import * as React from 'react';
import { ScrollView } from '@my/ui'
import {Base, Active, Success, Error} from "app/features/questionList/components/ToggleBar/Cells";

export const ToggleBar: React.FC = () => {
    const questions = Array.from({length: 50}, (_, index) => index + 1);

    return (
        <ScrollView
            horizontal
            // pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{
                width: '100%'
            }}
            scrollEventThrottle={2000}
            btlr={10}
            bblr={10}
        >
            {questions.map(question => {
                if (question < 5) return <Success value={question} key={question} />
                else if (question === 5) return <Error value={question} key={question} />
                else if (question === 6) return <Active value={question} key={question} />
                else return <Base value={question} key={question} />
            })}
        </ScrollView>
    )
}