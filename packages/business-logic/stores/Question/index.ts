import {types} from "mobx-state-tree";
import {Languages} from "app/features/dbList/interfaces";

export enum ModeTypes {
    SHOW_ANSWER = 'showAnswer',
    QUESTION = 'question'
}

const TitleValue = types.model({
    value: types.string
})

const Title = types.model({
    [Languages.Spanish]: TitleValue,
    [Languages.Deutch]: TitleValue,
    [Languages.English]: TitleValue,
    [Languages.Russian]: TitleValue,
    [Languages.Franch]: TitleValue,
})

const AnswerValue = types.model({
    [Languages.Spanish]: types.string,
    [Languages.Deutch]: types.string,
    [Languages.English]: types.string,
    [Languages.Russian]: types.string,
    [Languages.Franch]: types.string,
})

export const Answer = types.model({
    value: AnswerValue,
    isAnswer: types.boolean,
    isUserAnswer: types.optional(types.boolean, false)
});

export const Question = types.model({
    title: Title,
    answers: types.array(Answer),
    isFavourite: types.boolean,
    theme: types.string,
    imageId: types.maybeNull(types.number),
    mode: types.enumeration([ ModeTypes.QUESTION, ModeTypes.SHOW_ANSWER ])
}).actions(self => {
    const isUserAnswered = () =>
        Boolean(self.answers.filter(answer => answer.isUserAnswer).length);

    const setUserAnswer = (index: number) => {
        if (isUserAnswered() || !self.answers[index]) return;
        if (self.answers[index]) {
            self.answers[index].isUserAnswer = true;
            self.mode = ModeTypes.SHOW_ANSWER;
        }
    }

    const isRightAnswer = () =>
        Boolean(self.answers.filter(answer => answer.isUserAnswer && answer.isAnswer && true).length);

    const isWrongAnswer = () =>
        Boolean(self.answers.filter(answer => !answer.isUserAnswer && answer.isAnswer).length);

    const isNotAnswered = () =>
        !Boolean(self.answers.filter(answer => answer.isUserAnswer).length);

    const isAnswered = () =>
        Boolean(self.answers.filter(answer => answer.isUserAnswer).length);

    return {
        isAnswered,
        isNotAnswered,
        isRightAnswer,
        isWrongAnswer,
        isUserAnswered,
        setUserAnswer
    }
})

export const Questions = types.array(Question);