import * as React from 'react';

import { Content } from "app/features/components/Content";
import {YStack, Stack, ToggleGroup, Paragraph} from '@my/ui'
import { AlignCenter, AlignLeft, AlignRight } from '@tamagui/lucide-icons'
import {useColorScheme} from "react-native";
import './styles.css';

interface Props {
    // data: Questions;
}

export const Counter: React.FC<Props> = ({  }) => {
    const scheme = useColorScheme();
    const inverseTheme = scheme === 'dark' ? 'light' : 'dark';
    return (
        <YStack
            // pb={'$10'}
            width={'90%'}
            maxWidth={700}
            minWidth={300}
            // bw={1}
            overflow={'scroll'}
            theme={'dark'}
            br={5}
        >
            <Stack className={'video-thumbs-frame'}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                    <Stack className={'gallery-cell'}></Stack>
                ))}
            </Stack>
            {/*<ToggleGroup*/}
            {/*    orientation={'horizontal'}*/}
            {/*    type={'single'}*/}
            {/*    size={'$6'}*/}
            {/*    theme={'light'}*/}
            {/*    disableDeactivation={true}*/}
            {/*>*/}
            {/*    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => (*/}
            {/*        <ToggleGroup.Item value={item.toString()} aria-label={item} backgroundColor={'#D9D9D9'}>*/}
            {/*            <Paragraph color={'#333'}>{item}</Paragraph>*/}
            {/*        </ToggleGroup.Item>*/}
            {/*    ))}*/}
            {/*</ToggleGroup>*/}
        </YStack>
    )
}