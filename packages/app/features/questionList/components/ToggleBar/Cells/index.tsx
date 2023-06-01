import * as React from 'react';
import { Stack, H4 } from '@my/ui'

export enum CellType {
    Base,
    Success,
    Active,
    Error
}

interface Props {
    value: string | number;
    type?: CellType;
}

export const Base: React.FC<Props> = ({ value, type }) => {
    return (
        <Stack minWidth={40} bw={1} borderRightWidth={1} borderColor={'$background'} bc={'#818181'} >
            <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>{value}</H4>
        </Stack>
    )
};

export const Success: React.FC<Props> = ({ value }) => {
    return (
        <Stack minWidth={40} bc={'#7BC359'} borderRightWidth={1} borderColor={'$background'}>
            <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>{value}</H4>
        </Stack>
    )
};

export const Error: React.FC<Props> = ({ value }) => {
    return (
        <Stack minWidth={40} bc={'#FF5959'} borderRightWidth={1} borderColor={'$background'}>
            <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>{value}</H4>
        </Stack>
    )
};

export const Active: React.FC<Props> = ({ value }) => {
    return (
        <Stack minWidth={40} bc={'#c5c5c5'} borderRightWidth={1} borderColor={'$background'}>
            <H4 ta={'center'} lh={40} pl={12} pr={12} color={'#fff'}>{value}</H4>
        </Stack>
    )
};