import {types} from "mobx-state-tree";

export const Bar = types.model({
    totalCount: types.number,
    current: types.number,
    percent: types.number,
}).actions(self => {
    const setTotalCount = (totalCount: number) => {
        self.totalCount = totalCount;
        self.current = Number(Boolean(totalCount));
    }

    const setCurrent = (value: number) => {
        self.current = value;
    }
    return {
        setTotalCount,
        setCurrent
    }
}).views(self => ({
    percent: () => (self.current - 1) * 100 / self.totalCount
}))