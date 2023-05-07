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

export interface Questions {
    [id: number]: {
        title: TitleValues;
        answers: Answers[];
        isFavourite: boolean;
        theme: ThemeTypes;
    }
}


export const listQuestions: Questions = {
    1: {
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
    },
    2: {
        title: {
            en: {
                value: "The driver violates the road traffic law and receives a ticket from the traffic officer, how many days must he contact to pay the fine?"
            },
            ru: {
                value: "Водитель нарушает правила дорожного движения и получает билет от сотрудника ГИБДД, сколько дней он должен связаться, чтобы заплатить штраф?"
            },
            de: {
                value: "Der Fahrer verstößt gegen das Straßenverkehrsgesetz und erhält vom Verkehrsbeamten ein Ticket. Wie viele Tage muss er kontaktieren, um die Geldstrafe zu zahlen?"
            },
            es: {
                value: "El conductor viola la ley de tránsito y recibe una multa del oficial de tránsito, ¿cuántos días debe contactar para pagar la multa?"
            },
            fr: {
                value: "Le conducteur enfreint le code de la route et reçoit un ticket de l'agent de la circulation, combien de jours doit-il contacter pour payer l'amende?"
            }
        },
        answers: [{
            value: {
                en: "10 days",
                ru: "10 дней",
                de: "10 Tage",
                es: "10 días",
                fr: "10 jours"
            },
            isAnswer: false
        },{
            value: {
                en: "7 days",
                ru: "7 дней",
                de: "7 Tage",
                es: "7 días",
                fr: "7 jours"
            },
            isAnswer: true
        },{
            value: {
                en: "30 days",
                ru: "30 дней",
                de: "30 Tage",
                es: "30 dias",
                fr: "30 jours"
            },
            isAnswer: false
        },{
            value: {
                en: "15 days",
                ru: "15 дней",
                de: "15 Tage",
                es: "15 días",
                fr: "15 jours"
            },
            isAnswer: false
        }],
        isFavourite: false,
        theme: ThemeTypes.VEHICLE_LAW
    }
}