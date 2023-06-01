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

const Answer = types.model({
    value: AnswerValue,
    isAnswer: types.boolean,
    isUserAnswer: types.optional(types.boolean, false)
}).actions(self => {
    const setUserAnswer = () => {
        self.isUserAnswer = true;
    }
    return {
        setUserAnswer
    }
})

export const Question = types.model({
    title: Title,
    answer: types.array(Answer),
    isFavourite: types.boolean,
    theme: types.string,
    mode: types.enumeration([ ModeTypes.QUESTION, ModeTypes.SHOW_ANSWER ])
});



