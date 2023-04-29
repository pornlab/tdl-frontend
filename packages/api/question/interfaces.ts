export interface Question {
    _id: string;
    value: string;
    points: number;
    themeId: string;
    imageId: string | null;
}

export type Questions = Question[];

export type CreateParams = Omit<Question, '_id'>
