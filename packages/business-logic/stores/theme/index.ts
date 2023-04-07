import {getEnv, SnapshotIn, types} from "mobx-state-tree";
import { defaultIndicatorsSnapshot, Indicators, Theme } from "./models";
import { ThemeService } from "../../../api/theme";
import {flow} from "mobx-state-tree";
import axios from "axios";

interface Environment {
    themeService: ThemeService;
}

export const Themes = types.model({
    list: types.array(Theme),
    indicators: Indicators,
}).actions(self => {
    const { themeService } = getEnv<Environment>(self);

    const getList = flow(function*() {
        self.indicators.isLoading.set(true);
        try {
            self.list = yield themeService.getList();
        } catch (e) {
            console.error(`Can't get themes list`, e);
        } finally {
            self.indicators.isLoading.set(false)
        }
    });

    const afterCreate = flow(function*() {
        yield getList();
    });

    return {
        afterCreate,
        getList
    }
})

export const defaultThemesSnapshot: SnapshotIn<typeof Themes> = {
    list: [],
    indicators: defaultIndicatorsSnapshot,
}