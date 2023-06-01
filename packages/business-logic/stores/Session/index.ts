import {getEnv, Instance, SnapshotIn, types} from "mobx-state-tree";
import {ModeTypes, Question as QuestionModel} from "../Question";
import {Bar} from "./models";
import {Question} from "app/features/dbList/interfaces";

export interface SessionEnvironment {
    questions: Question[]
}

export const Session = types.model({
    questions: types.array(QuestionModel),
    bar: Bar,
}).actions(self => {
    const { questions } = getEnv<SessionEnvironment>(self);
    const afterCreate = () => {
        self.questions.push(...questions.reduce((arr, question, index) =>
            [...arr, {...question, mode: ModeTypes.QUESTION}], []
        ));
        self.bar.setTotalCount(self.questions.length);
    }
    return {
        afterCreate
    }
}).volatile(self => ({
    isEmpty: !Boolean(self.questions.length)
}));

export const defaultSessionSnapshot: SnapshotIn<typeof Session> = {
    questions: [],
    bar: {
        current: 0,
        totalCount: 0
    }
}