import * as React from 'react';

import {View, Text, Dimensions} from 'react-native'
import {XStack, Stack, Button, ScrollView} from '@my/ui'
import {QuestionView} from "app/features/question";
import {listQuestions} from "../../../../../business-logic/tests";
import {ThemeTypes} from "../../../../../business-logic/tests/interfaces";
import {Content} from "app/features/components/Content";
import {useEffect, useRef, useState} from "react";
import {YStack} from "tamagui";

const width = Dimensions.get('window');
const height = 700;
const quest = {
        title: {
            en: {
                value: "While driving, the driver must have any documents used with the driving license"
            },
            ru: {
                value: "Во время вождения у водителя должны быть какие-либо документы, используемые с водительскими правами"
            },
            de: {
                value: "Während der Fahrt muss der Fahrer über alle mit dem Führerschein verwendeten Dokumente verfügen"
            },
            es: {
                value: "Mientras conduce, el conductor debe tener todos los documentos utilizados con el permiso de conducir"
            },
            fr: {
                value: "Pendant la conduite, le conducteur doit avoir tous les documents utilisés avec le permis de conduire"
            }
        },
        answers: [{
            value: {
                en: "National Identification Card",
                ru: "Национальное удостоверение личности",
                de: "Nationaler Personalausweis",
                es: "DNI",
                fr: "Carte d'identité nationale"
            },
            isAnswer: false
        },{
            value: {
                en: "Copy of house registration",
                ru: "Копия оформления дома",
                de: "Kopie der Hausregistrierung",
                es: "Copia del registro de la casa",
                fr: "Copie de l'enregistrement de la maison"
            },
            isAnswer: false
        },{
            value: {
                en: "Copy of car registration",
                ru: "Копия регистрации автомобиля",
                de: "Kopie der Fahrzeugregistrierung",
                es: "Copia del registro del auto",
                fr: "Copie de l'immatriculation de la voiture"
            },
            isAnswer: true
        },{
            value: {
                en: "Social Security Card",
                ru: "Карточка социального обеспечения",
                de: "Sozialversicherungsausweis",
                es: "Tarjeta de seguro Social",
                fr: "Carte de sécurité sociale"
            },
            isAnswer: false
        }],
        isFavourite: false,
        theme: ThemeTypes.VEHICLE_LAW
    };

export const Carousel: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState("1");
    const scrollRef = useRef<typeof ScrollView>(null);
    const questions = Array.from({length: 10}, (_, index) => index + 1);

    const setActQ = (val: string) => {
        const el = document.getElementsByClassName('question');
        if (!el) return;
        const elQuest = el[+val-1];
        if (!elQuest) return;
        elQuest.scrollIntoView()
        setActiveQuestion(val);
    }

    const onPressTouch = () => {
        // console.log('scrollRef', scrollRef)
        scrollRef.current?.scrollTo({
            x: 1000,
            animated: true,
        });
    }

    return (
        <>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                w={'100%'}
                directionalLockEnabled
                onScrollToTop={e => console.log(e)}
                ref={scrollRef}
            >
                {questions.map((questionKey) => (
                    <Stack>
                        <QuestionView data={quest} ind={questionKey} key={questionKey} />
                        <Button onPress={onPressTouch}>onPressTouch</Button>
                    </Stack>
                    ))}
            </ScrollView>
        </>
    )
}