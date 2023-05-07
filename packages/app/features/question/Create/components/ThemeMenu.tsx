import { MoreVertical } from '@tamagui/lucide-icons'
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

import { Instance, SnapshotIn } from "mobx-state-tree";
import { observer } from "mobx-react";
import {useLink} from "solito/link";

const cardSize = {
    width: isWeb ? 250 : '50%',
    height: 250
}

export const ThemeMenu = observer(({ themeId }) => {
    const createQuestionLink = useLink({
        href: `/theme/${themeId}/question/create`,
    });
    return (
        <Dialog modal>
            <Dialog.Trigger asChild>
                <Button size={'$6'} theme={'black'} icon={MoreVertical} />
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
                    <Button size={'$6'} theme={'green'} { ...createQuestionLink }>{'Добавить вопрос'}</Button>
                    <Button size={'$6'} theme={'gray'}>{'Редактировать тему'}</Button>
                    <Button size={'$6'} theme={'pink'}>{'Удалить тему'}</Button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
});
