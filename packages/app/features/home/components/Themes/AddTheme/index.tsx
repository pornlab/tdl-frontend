import { X } from '@tamagui/lucide-icons'
import {
    Adapt,
    Dialog,
    Fieldset,
    Input,
    Label,
    Sheet,
    Unspaced,
} from 'tamagui'
import React, { useEffect, useState } from "react";
import { Button, YStack, Card, Text, isWeb } from '@my/ui'
import serviceInitializer from "../../../../../../api/serviceInitializer";
import { ThemeService } from "../../../../../../api/theme";
import { CreateTheme, defaultCreateThemeSnapshot } from "../../../../../../business-logic/stores/theme/create";
import { Instance, SnapshotIn } from "mobx-state-tree";
import { observer } from "mobx-react";

const cardSize = {
    width: isWeb ? 250 : '50%',
    height: 250
}

export const AddTheme = observer(({ onCreate }) => {
    const [store, setStore] = useState<SnapshotIn<typeof CreateTheme>>(defaultCreateThemeSnapshot);
    useEffect(() => setStore(CreateTheme.create(defaultCreateThemeSnapshot, {
        themeService: serviceInitializer<ThemeService>(ThemeService),
    })), []);

    const { title, description, year } = store;
    
    const setTitle = (e) => title.change(e.target.value)
    const setDescription = (e) => description.change(e.target.value)
    const setYear = (e) => year.change(+e.target.value)
    // const isFormValid = store.isValid();

    const create = async () => {
        await store.create();
        await onCreate();
    }

    return (
        <Dialog modal>
            <Dialog.Trigger asChild>
                <Card
                    animation="bouncy"
                    size="$4"
                    w={cardSize.width}
                    h={cardSize.height}
                    scale={0.9}
                    hoverStyle={{ scale: 0.925, cursor: 'pointer' }}
                    pressStyle={{ scale: 0.875, borderWidth: 3, borderColor: '$color' }}
                    style={{
                        borderWidth: 1
                    }}
                >
                    <Card.Header>
                        <Text fontSize={180} ta={'center'}>+</Text>
                    </Card.Header>
                    <Card.Background />
                </Card>
            </Dialog.Trigger>

            <Adapt when="sm" platform="touch">
                <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame padding="$4" space>
                        <Adapt.Contents />
                    </Sheet.Frame>
                    <Sheet.Overlay />
                </Sheet>
            </Adapt>

            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    o={0.5}
                    enterStyle={{ o: 0 }}
                    exitStyle={{ o: 0 }}
                />

                <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    space
                >
                    <Dialog.Title>Добавление темы</Dialog.Title>
                    <Dialog.Description>
                        Заполните поля и сохраните данные
                    </Dialog.Description>
                    <Fieldset space="$4" horizontal>
                        <Label w={160} justifyContent="flex-end" htmlFor="title">
                            Название
                        </Label>
                        <Input f={1} id="title" onChange={setTitle} value={title.value} />
                    </Fieldset>
                    <Fieldset space="$4" horizontal>
                        <Label w={160} justifyContent="flex-end" htmlFor="description">
                            Описание
                        </Label>
                        <Input f={1} id="description" onChange={setDescription} value={description.value} />
                    </Fieldset>
                    <Fieldset space="$4" horizontal>
                        <Label w={160} justifyContent="flex-end" htmlFor="year">
                            Год
                        </Label>
                        <Input f={1} id="year" onChange={setYear} value={year.value} keyboardType={'numeric'} />
                    </Fieldset>

                    <YStack ai="flex-end" mt="$2">
                        <Dialog.Close displayWhenAdapted asChild>
                            {/*<Button themeInverse={isFormValid} disabled={!isFormValid} theme="alt1" aria-label="Close" onPress={create}>*/}
                            <Button theme="alt1" aria-label="Close" onPress={create}>
                                Создать
                            </Button>
                        </Dialog.Close>
                    </YStack>

                    <Unspaced>
                        <Dialog.Close asChild>
                            <Button pos="absolute" t="$3" r="$3" size="$2" circular icon={X} />
                        </Dialog.Close>
                    </Unspaced>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
});
