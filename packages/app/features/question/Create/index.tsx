import React, {useEffect, useState} from 'react'
import { YStack, H2, ScrollView, Button, XStack, Paragraph, Input, TextArea, Text, H6 } from '@my/ui'
import { createParam } from 'solito'
import { observer } from "mobx-react";
import serviceInitializer from "../../../../api/serviceInitializer";
import { CreateQuestion, defaultCreateQuestionSnapshot } from "../../../../business-logic/stores/question/create";
import { QuestionService } from "../../../../api/question";
import { ToggleGroup } from "tamagui";
import { AlignCenter, AlignLeft, Image } from '@tamagui/lucide-icons'
import {AddImageStep} from "app/features/question/Create/components/AddImageStep";

const { useParam } = createParam<{ id: string }>()

const Answers = [1, 2, 3, 4];

export const CreateQuestionScreen = observer(() => {
    const [mode, setMode] = useState('text');
    const [themeId] = useParam('id');
    const [store, setStore] = useState(defaultCreateQuestionSnapshot);
    useEffect(() => setStore(CreateQuestion.create(defaultCreateQuestionSnapshot, {
        themeId,
        questionService: serviceInitializer<QuestionService>(QuestionService),
    })), []);

    const isCreating = store.isCreating.value;

    return (
        <>
            <ScrollView w="100%" h="100%" bc="$background" f={1} space p={16}>
                <YStack>
                    <Paragraph theme="alt2" pb={8}>Добавьте вопрос, заполнив данные формы</Paragraph>
                    <Input flex={1} size={'$5'} placeholder={'Вопрос...'} />
                </YStack>
                <YStack>
                    <Paragraph theme="alt2" pb={8}>Добавьте варианты ответа. Переключите режим добавления, при необходимости</Paragraph>

                    <ToggleGroup type={'single'} size={'$6'} onValueChange={setMode} mb={16} value={mode}>
                        <ToggleGroup.Item value="text" aria-label="Left aligned">
                            <AlignLeft />
                        </ToggleGroup.Item>
                        <ToggleGroup.Item value="images" aria-label="Right aligned">
                            <Image />
                        </ToggleGroup.Item>
                    </ToggleGroup>

                    {mode === 'text' && (
                        <>
                            {Answers.map((item) => (
                                <TextArea flex={1} size={'$5'} mb={12} pt={8} placeholder={`Вариант ${item}`} />
                            ))}
                        </>
                    )}
                    {mode === 'images' && (
                        <YStack mt={16}>
                            {Answers.map((item) => <AddImageStep index={item} />)}
                        </YStack>
                    )}
                </YStack>
            </ScrollView>
            <XStack position={'fixed'} bottom={'auto'} space pb={48} w={'100%'} ai={'center'} jc={'center'} bc="$background">
                <Button size={'$6'} theme={'orange'}>Добавить вопрос</Button>
            </XStack>
        </>
    )
});
