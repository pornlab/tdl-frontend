export interface Test {
    _id: string;
    title: string;
    description: string;
    themeId: string;
    imageId: string;
    countQuestions: number;
}

export type Tests = Test[];

export type CreateParams = Omit<Test, '_id'>
