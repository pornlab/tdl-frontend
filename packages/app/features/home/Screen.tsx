import React from 'react'
import { H2, isWeb } from "@my/ui";
import { listItems } from './list';
import { List } from '../components/List';
import { Content } from "app/features/components/Content";

export const HomeScreen: React.FC = () => {
    return (
        <Content>
            {isWeb && <H2 letterSpacing={0} p={'$4'} pt={'$8'} ta={'center'}>Thailand Driving License</H2>}
            <List items={listItems} />
        </Content>
    )
};
