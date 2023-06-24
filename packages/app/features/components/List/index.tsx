import {H4, Image, Paragraph, Stack, XStack, YStack} from "@my/ui";
import { Image as ImageRN } from 'react-native';
import React from "react";
import {ListItem} from "app/features/components/List/helpers";
import {useLink} from "solito/link";

const SIZE_ICON = 90;

interface Props {
    items: ListItem[]
}

export const List: React.FC<Props> = ({ items }) => {
    return (
        <YStack
            pb={'$10'}
            width={'90%'}
            maxWidth={700}
            minWidth={300}
        >
            {items.map((item, index) => {
                const link = item.link && useLink({
                    href: item.link,
                })
                return (
                    <XStack
                        key={index}
                        backgroundColor={item.color}
                        br={20}
                        mb={'$4'}
                        style={{
                            transition: 'all 0.1s ease-in-out'
                        }}
                        hoverStyle={{
                            cursor: 'pointer',
                            scale: 1.02
                        }}
                        width={'100%'}
                        { ...link }
                    >
                        <Stack
                            backgroundColor={item.iconColor}
                            borderTopLeftRadius={20}
                            borderBottomLeftRadius={20}
                            p={'$3'}
                        >
                            <ImageRN
                                source={item.icon}
                                style={{
                                    width: SIZE_ICON,
                                    height: SIZE_ICON
                                }}
                            />
                        </Stack>
                        <YStack p={'$4'} flex={1} flexWrap='nowrap'>
                            <H4 color={'#484848'}>{item.title}</H4>
                            <Paragraph color={'#656565'}>{item.description}</Paragraph>
                        </YStack>
                    </XStack>
                )})
            }
        </YStack>
    )
}