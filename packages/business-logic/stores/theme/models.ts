import { SnapshotIn, types } from "mobx-state-tree";
import {defaultIndicatorSnapshot, Indicator} from "../common/Indicator";

export const Theme = types.model({
    _id: types.string,
    title: types.string,
    description: types.string,
    imageId: types.maybeNull(types.number),
    year: types.number
});

export const Indicators = types.model({
    isLoading: Indicator,
    isEmpty: Indicator,
});

export const defaultIndicatorsSnapshot: SnapshotIn<typeof Indicators> = {
    isLoading: defaultIndicatorSnapshot,
    isEmpty: defaultIndicatorSnapshot,
}

export const defaultThemeSnapshot: SnapshotIn<typeof Theme> = {
    _id: '',
    title: '',
    description: '',
    imageId: null,
    year: 0,
}