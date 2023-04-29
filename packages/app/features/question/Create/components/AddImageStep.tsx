import {Button, H6, Paragraph, XStack, YStack} from "@my/ui";
import * as React from "react";

export const AddImageStep = ({ index }) => {
    return (
        <XStack jc={'space-between'} mb={24}>
            <YStack jc={'center'}>
                <Paragraph theme="alt2" fontSize={'$5'}>{`Вариант ${index}`}</Paragraph>
            </YStack>
            <Button size={'$5'} theme={'black'}>Добавить файл</Button>
        </XStack>
    )
}