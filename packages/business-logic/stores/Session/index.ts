import {getEnv, SnapshotIn, types} from "mobx-state-tree";
import {ModeTypes, Questions} from "../Question";
import {Question} from "app/features/dbList/interfaces";
import {toJS} from "mobx";

export interface SessionEnvironment {
    questions: Question[]
}

export const Session = types.model({
    questions: Questions,
    totalCount: types.number,
    current: types.number,
    bar: types.number,
}).actions(self => {
    const { questions } = getEnv<SessionEnvironment>(self);

    const setTotalCount = (totalCount: number) => {
        self.totalCount = totalCount;
        self.current = Number(Boolean(totalCount));
    }

    const afterCreate = () => {
        self.questions.push(...questions.reduce((arr, question, index) =>
            [...arr, {...question, mode: ModeTypes.QUESTION}], []
        ));
        setTotalCount(self.questions.length);
    }

    const setCurrent = (value: number) => {
        self.current = value;
        checkIsAllQuestionsAnswered();
    }

    const checkIsAllQuestionsAnswered = () =>
        self.questions.reduce((res, question) => [...res, question.isUserAnswered()], []).every(r => Boolean(r))

    return {
        checkIsAllQuestionsAnswered,
        afterCreate,
        setTotalCount,
        setCurrent
    }
}).volatile(self => ({
    isEmptyQuestionList: !Boolean(self.questions.length),
    percent: () => {
        const countAnsweredQuestions = self.questions.reduce((arr, question, index) => {
            const isUserAnswered = question.answers.filter(answer => answer.isUserAnswer).length
            return arr + isUserAnswered;
        }, 0);
        return countAnsweredQuestions * 100 / self.totalCount;
    }
}));

export const defaultSessionSnapshot: SnapshotIn<typeof Session> = {
    questions: [],
    bar: 0,
    totalCount: 0,
    current: 0
}