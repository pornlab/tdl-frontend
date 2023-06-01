import * as React from 'react';

import { Question } from "../../../business-logic/tests/interfaces";
import { Content } from "app/features/components/Content";
import { createParam } from "solito";
import { listQuestions } from "../../../business-logic/tests";
import {H2, H3, H4, Stack, Paragraph, XStack, YStack} from '@my/ui'
import {NotFoundQuestion} from "app/features/question/notFound";
import {Dimensions} from "react-native";
import { Star } from '@tamagui/lucide-icons'

interface Props {
    data: Question;
    ind: number;
}

const { useParam } = createParam<{ id: string }>()
const { width, height } = Dimensions.get('window');

export const QuestionView: React.FC<Props> = ({ ind }) => {
    const [id] = useParam('id');
    const questionId = id || 0;
    const question = listQuestions[questionId];
    if (!questionId || !question) return <NotFoundQuestion />
    const { title, answers } = question;

    return (
        <Content>
            <YStack
                width={width > 700 ? 668 : width - 32}
                height={height}
            >
                <H3 letterSpacing={0} pb={'$6'}>{`${title.en.value}`}</H3>
                {answers.map((answer, index) => (
                    <XStack
                        mb={'$4'}
                        style={{
                            transition: 'all 0.1s ease-in-out'
                        }}
                        hoverStyle={{
                            cursor: 'pointer'
                        }}
                        br={4}
                        key={index}
                        bw={1}
                        borderColor={'#c5c5c5'}
                    >
                        <Paragraph lh={30} p={'$3'} fontSize={17}>{answer.value.en}</Paragraph>
                    </XStack>
                ))}
                <YStack alignItems={'flex-start'} mt={20}>
                    <Stack
                        bc={'#7659c3'}
                        pl={16}
                        pr={16}
                        pb={3}
                        pt={2}
                        hoverStyle={{ cursor: 'pointer' }}
                        br={20}
                    >
                        <Paragraph color={'#fff'} fontWeight={'bold'}>Add to favorites ⭐️</Paragraph>
                    </Stack>
                </YStack>
            </YStack>
        </Content>
    )
}