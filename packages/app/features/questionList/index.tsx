import * as React from 'react';

import { Questions } from "../../../business-logic/tests/interfaces";
import { Content } from "app/features/components/Content";
import { createParam } from "solito";
import { listQuestions } from "../../../business-logic/tests";
import {H2, H4, isWeb, Paragraph, XStack, YStack} from '@my/ui'
import {NotFoundQuestion} from "app/features/question/notFound";
import {Counter} from "app/features/questionList/components/Counter";
import {StatusBar} from "app/features/questionList/components/StatusBar";

interface Props {
    data: Questions;
}

export const QuestionList: React.FC<Props> = ({ data }) => {
    return (
        <Content>
            {/*<H2>QuestionList</H2>*/}
            <StatusBar />
            <Counter />
        </Content>
    )
}