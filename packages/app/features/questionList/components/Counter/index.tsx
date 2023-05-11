import * as React from 'react';

import { Content } from "app/features/components/Content";
import {YStack, Stack, ToggleGroup, Paragraph} from '@my/ui'
import { AlignCenter, AlignLeft, AlignRight } from '@tamagui/lucide-icons'
import {useColorScheme} from "react-native";

interface Props {
    // data: Questions;
}

export const Counter: React.FC<Props> = ({  }) => {
    const scheme = useColorScheme();
    const inverseTheme = scheme === 'dark' ? 'light' : 'dark';
    return (
        <YStack
            width={'90%'}
            maxWidth={700}
            minWidth={300}
            overflow={'scroll'}
            theme={'dark'}
            br={5}
        >
        </YStack>
    )
}