import questions from '../questions.json'

export enum ThemeTypes {
    VehicleLaw = 'VehicleLaw',
    RoadTrafficLaw = 'RoadTrafficLaw',
    TrafficSigns = 'TrafficSigns',
    SafeDriving = 'SafeDriving',
    TechniquesOfSafeDriving = 'TechniquesOfSafeDriving',
    VehicleMaintenance = 'VehicleMaintenance'
}

export interface Languages {

}


export interface Question {
    title: {

    };
    answers: string
    isFavourite: string
    theme: string
}

export const getQuestionsByTheme = (theme: ThemeTypes) => {
    return questions.filter(question => question.theme === theme);
}