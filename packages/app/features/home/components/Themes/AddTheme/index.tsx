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
import React, {useState} from "react";
import axios from "axios";
import { Button, XStack, XGroup, YStack, Card, H4, H5, Paragraph, Text, isWeb } from '@my/ui'

const cardSize = {
    width: isWeb ? 250 : '50%',
    height: 250
}

export const AddTheme = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageId, setImageId] = useState('');
    const [year, setYear] = useState(null);

    const disabledButton = Boolean(!title || !description || !year);

    const createTheme = async () => {
        try {
            await axios.post('http://192.168.1.79:3000/api/theme/create', {
                title,
                description,
                year,
                imageId: imageId || null
            }, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBiOWM1NzQxZThlYTI0NDFmOWY0YiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTY3NzcyNDM4MywiZXhwIjoxNjc3ODEwNzgzfQ.8wG2H1P46WCHdQvk7SnxFAodqeZyeN_lyYkestbOgSI'
                },
            }).then(res => res.data);
            await onCreate();
        }
        catch (err) {
            console.log(err)
        }
    };

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
                        <Input f={1} id="title" onChange={e => setTitle(e.target.value)} value={title} />
                    </Fieldset>
                    <Fieldset space="$4" horizontal>
                        <Label w={160} justifyContent="flex-end" htmlFor="description">
                            Описание
                        </Label>
                        <Input f={1} id="description" onChange={e => setDescription(e.target.value)} value={description} />
                    </Fieldset>
                    <Fieldset space="$4" horizontal>
                        <Label w={160} justifyContent="flex-end" htmlFor="year">
                            Год
                        </Label>
                        <Input f={1} id="year" onChange={e => setYear(+e.target.value)} value={year} keyboardType={'numeric'} />
                    </Fieldset>
                    {/*<Fieldset space="$4" horizontal disabled>*/}
                    {/*    <Label w={160} justifyContent="flex-end" htmlFor="imageId">*/}
                    {/*        Изображение*/}
                    {/*    </Label>*/}
                    {/*    <Input f={1} id="imageId" disabled />*/}
                    {/*</Fieldset>*/}
                    {/*<Fieldset space="$4" horizontal>*/}
                    {/*    <Label w={160} justifyContent="flex-end" htmlFor="username">*/}
                    {/*        <TooltipSimple label="Pick your favorite" placement="bottom-start">*/}
                    {/*            <Paragraph>Food</Paragraph>*/}
                    {/*        </TooltipSimple>*/}
                    {/*    </Label>*/}
                    {/*</Fieldset>*/}

                    <YStack ai="flex-end" mt="$2">
                        <Dialog.Close displayWhenAdapted asChild>
                            <Button themeInverse={!disabledButton} theme="alt1" aria-label="Close" onPress={createTheme}>
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
}