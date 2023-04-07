import { SnapshotIn, types } from "mobx-state-tree";

export const TextField = types.model({
    value: types.string
}).actions(self => {
    const change = (value: string) => self.value = value;

    return {
        change
    }
});

export const defaultTextFieldSnapshot: SnapshotIn<typeof TextField> = {
    value: '',
}