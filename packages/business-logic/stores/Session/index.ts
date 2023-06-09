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

    const goToNextQuestion = () => {
        if (checkIsAllQuestionsAnswered()) return;
        const nextQuestion = findNotAnsweredQuestion();
        if (!nextQuestion) return;
        const index = self.questions.findIndex(question => question === nextQuestion)
        if (!(index >= 0)) return;
        setCurrent(index+1);
    }

    const findNotAnsweredQuestion = () => {
        const nextQuestioninAfterCurrent = self.questions.slice(self.current, self.totalCount).find(question => question.isNotAnswered());

        if (!nextQuestioninAfterCurrent)
            return self.questions.find(question => question.isNotAnswered());

        return nextQuestioninAfterCurrent
    }

    return {
        checkIsAllQuestionsAnswered,
        afterCreate,
        setTotalCount,
        setCurrent,
        goToNextQuestion
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