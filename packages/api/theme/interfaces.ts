export interface Theme {
    _id: string;
    title: string;
    description: string;
    imageId: number | null;
    year: number;
}

export type Themes = Theme[];

export type CreateParams = Omit<Theme, '_id'>
