import React, { useEffect, useState } from 'react'
import {Button, Paragraph, YStack, XStack, Spinner, H2, H1, Image, ScrollView} from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import serviceInitializer from "../../../api/serviceInitializer";
import { ThemeService } from "../../../api/theme";
import { defaultThemeViewSnapshot, ThemeView } from "../../../business-logic/stores/theme/theme";
import {observer} from "mobx-react";

export const ThemeDetailScreen = observer(() => {
    const [store, setStore] = useState(defaultThemeViewSnapshot);
    useEffect(() => setStore(ThemeView.create(defaultThemeViewSnapshot, {
        themeService: serviceInitializer<ThemeService>(ThemeService),
    })), []);

    const isLoading = store.isLoading.value;

    const link = useLink({
        href: '/',
    });

    if (isLoading) {
        return (
            <YStack p="$3" space="$4" ai="center" jc={'center'} h={'100%'}>
                <Spinner size="large" color="$orange10" />
            </YStack>
        )
    }

  return (
      <>
        <ScrollView w="100%" h="100%" bc="$background" f={1} space>
            <YStack m={16} mt={32}>
                <H2 letterSpacing={0} color={'$color'} textAlign={'center'} mb={24}>{store.data.title}</H2>
                <Image width={'100%'} height={300} src={'https://www.shutterstock.com/image-vector/symbol-medical-sign-cross-flat-600w-1987516091.jpg'} />
                <Paragraph mt={24} ta="center" color={'$color'} fontSize={18} textAlign={'center'}>{store.data.description}</Paragraph>
            </YStack>
        </ScrollView>
        <XStack position={'fixed'} bottom={0} space pb={48} w={'100%'} ai={'center'} jc={'center'} bc="$background">
            <Button size={'$6'} bc={'#FF9669'} color={'white'}>Вопросы по теме</Button>
        </XStack>
    </>
  )
});
