import { SnapshotIn, types } from "mobx-state-tree";
import {defaultIndicatorSnapshot, Indicator} from "../common/Indicator";

export enum MainImageType {
    THEMES = 'themes',
    MARAPHON = 'maraphon',
    EXAM = 'exam',
    FAVOURITES = 'favourites',
    DEFAULT = 'default'
}

export const MainItem = types.model({
    title: types.string,
    description: types.string,
    imageType: types.enumeration(Object.values(MainImageType)),
});

export const Indicators = types.model({
    isLoading: Indicator,
    isEmpty: Indicator,
});

export const defaultIndicatorsSnapshot: SnapshotIn<typeof Indicators> = {
    isLoading: defaultIndicatorSnapshot,
    isEmpty: defaultIndicatorSnapshot,
}

export const defaultThemeSnapshot: SnapshotIn<typeof MainItem> = {
    title: '',
    description: '',
    imageType: MainImageType.DEFAULT,
}