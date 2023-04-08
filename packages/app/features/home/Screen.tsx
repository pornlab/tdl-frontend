import {Button, XStack, XGroup, YStack, Card, H4, H5, Paragraph, Text, ScrollView, isWeb, Spinner} from '@my/ui'
import React, {useEffect, useRef, useState} from 'react'
import { ListChecks, Star, AlarmClock, Info, Slash } from '@tamagui/lucide-icons'
import { observer } from 'mobx-react';
import {defaultThemesSnapshot, Themes} from "../../../business-logic/stores/theme";
import {AddTheme} from "app/features/home/components/Themes/AddTheme";
import serviceInitializer from "../../../api/serviceInitializer";
import {ThemeService} from "../../../api/theme";
import {useLink} from "solito/link";

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
    }];

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

    const link = useLink({
        href: '/theme/78',
    })

    return (
        <>
            <ScrollView
                w="100%"
                h="100%"
                bc="$background"
            >
                {isLoading &&
                    <YStack p="$3" space="$4" ai="center" jc={'center'} h={'100vw'}>
                        <Spinner size="large" color="$orange10" />
                    </YStack>
                }
                {store.list && (
                    <YStack f={1} jc="center" ai="center" p="$4" pb={'$7'} mb={100} fd={'row'} fw={'wrap'}>
                        {store.list.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    animation="bouncy"
                                    size="$4"
                                    w={cardSize.width}
                                    h={cardSize.height}
                                    scale={0.9}
                                    hoverStyle={{ scale: 0.925, cursor: 'pointer' }}
                                    pressStyle={{ scale: 0.875 }}
                                    style={{
                                        borderWidth: 1
                                    }}
                                    {...link}
                                >
                                    <Card.Header >
                                        <H5 pb={16}>{item.title}</H5>
                                        <Paragraph theme="alt2">{item.description}</Paragraph>
                                    </Card.Header>
                                    <Card.Background />
                                </Card>)
                        })}
                        <AddTheme onCreate={store.getList} />
                    </YStack>
                )}
            </ScrollView>
            {/*<XStack ai={'center'} jc={'center'} bc="$background" position={'fixed'} bottom={0} w={'100%'} pb={36}>*/}
            {/*    <XGroup*/}
            {/*        size="$6"*/}
            {/*        $gtSm={{ size: '$5' }}*/}
            {/*        space={false}*/}
            {/*        bordered={1}*/}
            {/*    >*/}
            {/*        {Buttons.map((item, index) => (*/}
            {/*            <Button*/}
            {/*                key={index}*/}
            {/*                size="$6"*/}
            {/*                padding={20}*/}
            {/*                // themeInverse*/}
            {/*                icon={item.icon}*/}
            {/*                scaleIcon={active === index ? 1.6 : 1.4}*/}
            {/*                borderBottomColor={active === index ? 'palevioletred' : 0}*/}
            {/*                borderBottomWidth={active === index ? 4 : 0}*/}
            {/*                onPress={() => {*/}
            {/*                    setActive(index);*/}
            {/*                    getThemes();*/}
            {/*                }}*/}
            {/*                animation={'quick'}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </XGroup>*/}
            {/*</XStack>*/}
        </>
    )
});
