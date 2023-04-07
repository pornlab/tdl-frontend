import {flow, getEnv, SnapshotIn, types} from "mobx-state-tree";
import {ThemeService} from "../../../api/theme";
import {defaultIndicatorSnapshot, Indicator} from "../common/Indicator";
import {defaultTextFieldSnapshot, TextField} from "../common/TextField";
import {defaultNumberFieldSnapshot, NumberField} from "../common/NumberField";

export interface Environment {
    themeService: ThemeService;
}

export const CreateTheme = types.model({
    title: TextField,
    description: TextField,
    year: NumberField,
    imageId: NumberField,
    isLoading: Indicator,
}).actions(self => {
    const { themeService } = getEnv<Environment>(self);

    const create = flow(function*() {
        self.isLoading.set(true);
        try {
            yield themeService.create({
                title: self.title.value,
                description: self.description.value,
                imageId: null,
                year: self.year.value
            });

            self.title.value = '';
            self.description.value = '';
            self.year.value = 0;

        } catch (e) {
            console.error(`New theme was not created`, e);
        } finally {
            self.isLoading.set(false);
        }
    });

    return {
        create
    }
}).views(self => ({
    isValid: () => {
        const isTitleValid = self.title.value.length > 0;
        const isDescriptionValid = self.description.value.length > 0;
        const isYearValid = self.year.value > 0;

        return isTitleValid && isDescriptionValid && isYearValid;
    }
}))

export const defaultCreateThemeSnapshot: SnapshotIn<typeof CreateTheme> = {
    title: defaultTextFieldSnapshot,
    description: defaultTextFieldSnapshot,
    year: defaultNumberFieldSnapshot,
    imageId: defaultNumberFieldSnapshot,
    isLoading: defaultIndicatorSnapshot,
}
