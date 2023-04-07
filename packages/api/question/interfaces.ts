export interface Question {
    _id: string;
    value: string;
    testId: string;
    themeId: string;
    imageId: string;
    points: number;
}

export type Questions = Question[];

export type CreateParams = Omit<Question, '_id'>
