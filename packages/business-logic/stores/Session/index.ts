import {applySnapshot, getEnv, SnapshotIn, types} from "mobx-state-tree";
import {ModeTypes, Questions} from "../Question";
import {Question} from "app/features/dbList/interfaces";

export interface SessionEnvironment {
    questions: Question[]
    stopTimer?: () => void;
    restartTimer?: () => void;
    isExam?: boolean
}

export const Session = types.model({
    questions: Questions,
    totalCount: types.number,
    current: types.number,
    bar: types.number,
    isExam: types.boolean,
    isExamFinished: types.boolean
}).actions(self => {
    const { questions, stopTimer, restartTimer, isExam } = getEnv<SessionEnvironment>(self);

    const setTotalCount = (totalCount: number) => {
        self.totalCount = totalCount;
        self.current = Number(Boolean(totalCount));
    }

    const afterCreate = () => {
        self.isExam = Boolean(isExam);
        self.isExamFinished = Boolean(false);
        self.questions.push(...questions.reduce((arr, question, index) =>
            [...arr, {...question, mode: ModeTypes.QUESTION }], []
        ));
        setTotalCount(self.questions.length);
    }

    const setCurrent = (value: number) => {
        self.current = value;
        checkIsAllQuestionsAnswered();
    }

    const checkIsAllQuestionsAnswered = () => {
        const allQuestionsAnswered = self.questions.reduce((res, question) => [...res, question.isUserAnswered()], []).every(r => Boolean(r))
        if (allQuestionsAnswered) {
            stopTimer && stopTimer();
            self.isExamFinished = Boolean(isExam);
        }
        return allQuestionsAnswered
    }

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

    const reset = () => {
        applySnapshot(self, defaultSessionSnapshot);
        restartTimer && restartTimer()
        self.isExamFinished = Boolean(isExam);
        afterCreate();
    }

    return {
        checkIsAllQuestionsAnswered,
        afterCreate,
        setTotalCount,
        setCurrent,
        goToNextQuestion,
        reset,
    }
}).volatile(self => ({
    isEmptyQuestionList: !Boolean(self.questions.length),
    percent: () => {
        const countAnsweredQuestions = self.questions.reduce((arr, question, index) => {
            const isUserAnswered = question.answers.filter(answer => answer.isUserAnswer).length
            return arr + isUserAnswered;
        }, 0);
        return countAnsweredQuestions * 100 / self.totalCount;
    },
    rightAnswersCount: () => {
        return self.questions.reduce((arr, question, index) => {
            return arr + +question.isRightAnswer();
        }, 0);
    },
    errorAnswersCount: () => {
        return self.questions.reduce((arr, question, index) => {
            return arr + +!question.isRightAnswer();
        }, 0);
    },
    isExamResultSuccess: () => {
        const errorCount = self.questions.reduce((arr, question, index) => {
            return arr + +!question.isRightAnswer();
        }, 0);
        return errorCount <= 1
    }
}))

export const defaultSessionSnapshot: SnapshotIn<typeof Session> = {
    questions: [],
    bar: 0,
    totalCount: 0,
    current: 0,
    isExam: false,
    isExamFinished: false
}