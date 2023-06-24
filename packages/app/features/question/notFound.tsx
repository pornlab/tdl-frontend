import * as React from 'react';

import { Question } from "../../../business-logic/tests/interfaces";
import { Content } from "app/features/components/Content";
import { createParam } from "solito";
import { listQuestions } from "../../../business-logic/tests";
import {H2, isWeb, ScrollView} from '@my/ui'

export const NotFoundQuestion: React.FC = () => {
    return (
        <Content>
            <H2 letterSpacing={0} p={'$4'} pt={'$8'} ta={'center'}>Question was not found</H2>
        </Content>
    )
}