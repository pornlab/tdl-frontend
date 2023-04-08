import {Button, XStack, XGroup, YStack, Card, H4, H5, Paragraph, Text, ScrollView, isWeb, Spinner} from '@my/ui'
import * as React from 'react'
import { observer } from 'mobx-react';
import {useLink} from "solito/link";

const cardSize = {
    width: isWeb ? 250 : '50%',
    height: 250
}

export const ThemeCard = observer(({ item, index }) => {
    const link = useLink({
        href: `/theme/${item._id}`,
    });
    return (
        <Card
            key={index}
            animation="bouncy"
            size="$4"
            w={cardSize.width}
            h={cardSize.height}
            scale={0.9}
            hoverStyle={{ scale: 0.925, cursor: 'pointer' }}
            pressStyle={{ scale: 0.875 }}
            style={{
                borderWidth: 1
            }}
            {...link}
        >
            <Card.Header >
                <H5 pb={16}>{item.title}</H5>
                <Paragraph theme="alt2">{item.description}</Paragraph>
            </Card.Header>
            <Card.Background />
        </Card>
    )
});
