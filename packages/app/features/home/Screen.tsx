import { Button, XStack, XGroup, YStack, Card, H4, H5, Paragraph, Text, ScrollView} from '@my/ui'
import React, { useState } from 'react'
import { ListChecks, Star, AlarmClock, Info, Slash } from '@tamagui/lucide-icons'
import axios from "axios";
import {Spinner} from "tamagui";
import {AddTheme} from "app/features/home/components/Themes/AddTheme";

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
    width: '50%',
    height: 250
}

export function HomeScreen() {
    const [active, setActive] = useState(0);
    const [themes, setThemes] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getThemes = async () => {
        try {
            const savedThemes = await axios.get('http://192.168.1.79:3000/api/theme/getList', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBiOWM1NzQxZThlYTI0NDFmOWY0YiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTY3NzcyNDM4MywiZXhwIjoxNjc3ODEwNzgzfQ.8wG2H1P46WCHdQvk7SnxFAodqeZyeN_lyYkestbOgSI'
                },
                params: {
                    year: 2022
                }
            }).then(res => res.data);

            setThemes(savedThemes);
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <>
            <ScrollView
                w="100%"
                h="100%"
                bc="$background"
            >
                {/*{isLoading &&*/}
                {/*    <YStack p="$3" space="$4" ai="center" jc={'center'} h={'100%'}>*/}
                {/*        <Spinner size="large" color="$orange10" />*/}
                {/*    </YStack>*/}
                {/*}*/}
                {(
                    <YStack f={1} jc="space-between" ai="center" p="$4" pb={'$7'} mb={100} fd={'row'} fw={'wrap'}>
                        {themes.map((item) => {
                            return (
                                <Card
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
                                >
                                    <Card.Header >
                                        <H5 pb={16}>{item.title}</H5>
                                        <Paragraph theme="alt2">{item.description}</Paragraph>
                                    </Card.Header>
                                    <Card.Background />
                                </Card>)
                        })}
                        <AddTheme onCreate={getThemes} />
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
                            size="$6"
                            padding={20}
                            // themeInverse
                            icon={item.icon}
                            scaleIcon={active === index ? 1.6 : 1.4}
                            onPress={() => {
                                setActive(index);
                                getThemes();
                            }}
                            animation={'quick'}
                        />
                    ))}
                </XGroup>
            </XStack>
        </>
    )
}
