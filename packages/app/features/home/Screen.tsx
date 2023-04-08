import {Button, XStack, XGroup, YStack, Card, H4, H5, Paragraph, Text, ScrollView, isWeb, Spinner} from '@my/ui'
import React, {useEffect, useRef, useState} from 'react'
import { ListChecks, Star, AlarmClock, Info, Slash } from '@tamagui/lucide-icons'
import { observer } from 'mobx-react';
import {defaultThemesSnapshot, Themes} from "../../../business-logic/stores/theme";
import {AddTheme} from "app/features/home/components/Themes/AddTheme";
import serviceInitializer from "../../../api/serviceInitializer";
import {ThemeService} from "../../../api/theme";
import {ThemeCard} from "app/features/home/components/Themes/ThemeCard";

const Buttons = [
    {
        icon: ListChecks,
        link: '/themes',
    },{
        icon: Slash,
        link: '/user-detail',
    },{
        icon: AlarmClock,
        link: '/exam',
    },{
        icon: Star,
        link: '/favourites',
    },{
        icon: Info,
        link: '/info',
    }
    ];

const cardSize = {
    width: isWeb ? 250 : '50%',
    height: 250
}

export const HomeScreen = observer(() => {
    const [store, setStore] = useState(defaultThemesSnapshot);
    useEffect(() => setStore(Themes.create(defaultThemesSnapshot, {
        themeService: serviceInitializer<ThemeService>(ThemeService),
    })), []);

    const isLoading = store.indicators.isLoading.value;


    return (
        <>
            <ScrollView
                w="100%"
                h="100%"
                bc="$background"
            >
                {isLoading &&
                    <YStack p="$3" space="$4" ai="center" jc={'center'} h={'100%'}>
                        <Spinner size="large" color="$orange10" />
                    </YStack>
                }
                {!isLoading && store.list && (
                    <YStack f={1} ai="center" p="$4" pb={'$7'} mb={100} fd={'row'} fw={'wrap'}>
                        {store.list.map((item, index) => <ThemeCard key={item._id} item={item} index={index} />)}
                        <AddTheme onCreate={store.getList} />
                    </YStack>
                )}
            </ScrollView>
            <XStack ai={'center'} jc={'center'} bc="$background" position={'fixed'} bottom={0} w={'100%'} pb={36}>
                <XGroup
                    size="$6"
                    $gtSm={{ size: '$5' }}
                    space={false}
                    bordered={1}
                >
                    {Buttons.map((item, index) => (
                        <Button
                            key={index}
                            size="$7"
                            padding={20}
                            // themeInverse
                            icon={item.icon}
                            scaleIcon={1}
                            // borderBottomColor={active === index ? 'palevioletred' : 0}
                            // borderBottomWidth={active === index ? 4 : 0}
                            // onPress={() => {
                            //     setActive(index);
                            // }}
                            animation={'quick'}
                        />
                    ))}
                </XGroup>
            </XStack>
        </>
    )
});
