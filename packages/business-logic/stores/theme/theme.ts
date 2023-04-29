import {defaultThemeSnapshot, Theme} from "./models";
import {flow, getEnv, SnapshotIn, types} from "mobx-state-tree";
import {defaultIndicatorSnapshot, Indicator} from "../common/Indicator";
import {ThemeService} from "../../../api/theme";

interface Environment {
    id: string;
    themeService: ThemeService;
}

export const ThemeView = types.model({
    data: Theme,
    isLoading: Indicator,
}).actions(self => {
    const { id, themeService } = getEnv<Environment>(self);

    const get = flow(function*(id: string) {
        self.isLoading.set(true);
        try {
            self.data = yield themeService.get(id);
        } catch (e) {
            console.error(`Can't get theme`, e);
        } finally {
            self.isLoading.set(false)
        }
    });

    const afterCreate = flow(function*() {
        yield get(id);
    })

    return {
        afterCreate,
        get
    }
});

export const defaultThemeViewSnapshot: SnapshotIn<typeof ThemeView> = {
    data: defaultThemeSnapshot,
    isLoading: defaultIndicatorSnapshot,
}