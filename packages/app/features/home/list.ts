import Themes from '../components/icons/themes.png';
import Exam from '../components/icons/exam.png';
import Maraphon from '../components/icons/maraphon.png';
import Favourite from '../components/icons/favourite.png';
import { ListItem } from "app/features/components/List/helpers";

export const listItems: ListItem[] = [
    {
        title: 'Темы',
        description: 'Вопросы по темам для ознакомления с правилами дорожного движения',
        color: '#FFDFD1',
        iconColor: '#FFA6A6',
        icon: Themes,
        link: `/themes`,
    },
    {
        title: 'Марафон',
        description: 'Все вопросы для более точной подготовки к экзамену',
        color: '#D1F4FF',
        iconColor: '#A6EAFF',
        icon: Maraphon
    },
    {
        title: 'Экзамен',
        description: 'Отличная возможность проверить свою подготовку',
        color: '#D1DBFF',
        iconColor: '#A6C4FF',
        icon: Exam
    },
    {
        title: 'Избранное',
        description: 'Вопросы, которые были помечены ⭐️️',
        color: '#FFD1F2',
        iconColor: '#E9C0E5',
        icon: Favourite
    },
]