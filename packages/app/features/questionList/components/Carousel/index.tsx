import * as React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native'
import {YStack, Stack, ToggleGroup, Paragraph} from '@my/ui'

const { width } = Dimensions.get('window')

export const Carousel: React.FC = () => {
    return (
        <Stack f={1} jc={'center'} ai={'center'} ac={'center'} bc={'white'}>
            <Stack w={'100%'} h={70} bc={'black'} ai={'center'} jc={'center'}>
                <Paragraph color={'#fff'} fontSize={16} fw={'bold'} alignSelf={'center'}>MOVIES</Paragraph>
            </Stack>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ backgroundColor: "blue", flex: 1, width: width, height: 200 }}></View>
                <View style={{ backgroundColor: "red", flex: 1, width: width, height: 200 }}></View>
                <View style={{ backgroundColor: "yellow", flex: 1, width: width, height: 200 }}></View>
            </ScrollView>
        </Stack>
    )
}