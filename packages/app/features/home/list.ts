import Themes from '../components/icons/themes.png'
import Exam from '../components/icons/exam.png'
import Maraphon from '../components/icons/maraphon.png'
import Favourite from '../components/icons/favourite.png'
import { ListItem } from 'app/features/components/List/helpers'

export const listItems: ListItem[] = [
  {
    title: 'mainMenu:themes',
    description: 'mainMenu:description.themes',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: Themes,
    link: `/themes`,
  },
  {
    title: 'mainMenu:marathon',
    description: 'mainMenu:description.marathon',
    color: '#D1F4FF',
    iconColor: '#A6EAFF',
    icon: Maraphon,
    disabled: true,
  },
  {
    title: 'mainMenu:exam',
    description: 'mainMenu:description.exam',
    color: '#D1DBFF',
    iconColor: '#A6C4FF',
    icon: Exam,
    disabled: true,
  },
  {
    title: 'mainMenu:favourites',
    description: 'mainMenu:description.favourites',
    color: '#FFD1F2',
    iconColor: '#E9C0E5',
    icon: Favourite,
    disabled: true,
  },
]
