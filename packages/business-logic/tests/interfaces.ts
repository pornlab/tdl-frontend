export interface TitleValues {
    en: {
        value: string;
    },
    ru: {
        value: string;
    },
    de: {
        value: string;
    },
    es: {
        value: string;
    },
    fr: {
        value: string;
    }
}

export enum ThemeTypes {
    VEHICLE_LAW = 'vehicleLaw'
}

interface LanguagesList {
    en: string;
    ru: string;
    de: string;
    es: string;
    fr: string;
}

export interface Answers {
    value: LanguagesList
    isAnswer: boolean
}

export interface Question {
    title: TitleValues;
    answers: Answers[];
    isFavourite: boolean;
    theme: ThemeTypes;
}

export interface Questions {
    [id: number]: Question
}