import {SnapshotIn, types} from "mobx-state-tree";

export const Indicator = types.model({
    value: types.boolean,
}).actions(self => {
    const set = (value: boolean) => self.value = value;
    return {
        set
    }
});

export const defaultIndicatorSnapshot: SnapshotIn<typeof Indicator> = {
    value: false
}