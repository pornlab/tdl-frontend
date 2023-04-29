import {flow, getEnv, SnapshotIn, types} from "mobx-state-tree";
import { QuestionService } from "../../../api/question";
import {defaultQuestionSnapshot, Question} from "./models";
import {defaultIndicatorSnapshot, Indicator} from "../common/Indicator";

export interface Environment {
    themeId: string;
    questionService: QuestionService;
}

export const CreateQuestion = types.model({
    data: Question,
    isCreating: Indicator,
}).actions(self => {
    const { themeId, questionService } = getEnv<Environment>(self);

    const create = flow(function*() {
        self.isCreating.set(true);
        try {
            yield questionService.create({
                value: self.data.value,
                themeId: themeId,
                points: 1,
                imageId: null
            });
        } catch (e) {
            console.error('Question was not created', e);
        } finally {
            self.isCreating.set(false);
        }
    });

    return {
        create
    }
});

export const defaultCreateQuestionSnapshot: SnapshotIn<typeof CreateQuestion> = {
    data: defaultQuestionSnapshot,
    isCreating: defaultIndicatorSnapshot,
}