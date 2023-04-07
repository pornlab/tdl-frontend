import { SnapshotIn, types } from "mobx-state-tree";

export const NumberField = types.model({
    value: types.number
}).actions(self => {
    const change = (value: number) => self.value = value;

    return {
        change
    }
});

export const defaultNumberFieldSnapshot: SnapshotIn<typeof NumberField> = {
    value: 0,
}