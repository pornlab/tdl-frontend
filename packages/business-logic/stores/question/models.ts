import { SnapshotIn, types } from "mobx-state-tree";

export const Question = types.model({
    _id: types.string,
    value: types.string,
    points: types.number,
    themeId: types.string,
    imageId: types.maybeNull(types.string)
});

export const defaultQuestionSnapshot: SnapshotIn<typeof Question> = {
    _id: '',
    value: '',
    points: 0,
    themeId: '',
    imageId: null,
}