import * as React from 'react';

import { Question } from "../../../business-logic/tests/interfaces";
import { Content } from "app/features/components/Content";
import { createParam } from "solito";
import { listQuestions } from "../../../business-logic/tests";
import {H2, H4, isWeb, Paragraph, XStack, YStack} from '@my/ui'
import {NotFoundQuestion} from "app/features/question/notFound";

interface Props {
    data: Question;
}

const { useParam } = createParam<{ id: string }>()

export const QuestionView: React.FC<Props> = () => {
    const [id] = useParam('id');
    const questionId = id || 0;
    const question = listQuestions[questionId];
    if (!questionId || !question) return <NotFoundQuestion />
    const { title, answers } = question;
    const totalCount = 87;

    return (
        <Content>
            <YStack
                width={'90%'}
                maxWidth={700}
                minWidth={300}
            >
                <H2 letterSpacing={0} pb={'$8'}>1/87. {title.en.value}</H2>
                {answers.map(answer => (
                    <XStack
                        mb={'$4'}
                        style={{
                            transition: 'all 0.1s ease-in-out'
                        }}
                        hoverStyle={{
                            cursor: 'pointer',
                            scale: 1.02
                        }}
                        br={4}
                        bc={'#ffe2bc'}
                    >
                        <Paragraph lh={30} w={'100%'} p={'$4'} color={'#333'} fontSize={17}>{answer.value.en}</Paragraph>
                    </XStack>
                ))}
            </YStack>
        </Content>
    )
}