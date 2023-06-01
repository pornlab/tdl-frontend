import VehicleLaw from '../components/icons/vehicleLaw.png'
import RoadTrafficLaw from '../components/icons/roadTrafficLaw.png'
import TrafficSigns from '../components/icons/trafficSigns.png'
import SafeDriving from '../components/icons/safeDriving.png'
import VehicleMaintenance from '../components/icons/vehicleMaintenance.png'
import TechniquesOfSafeDriving from '../components/icons/techniquesOfSafeDriving.png'

import { ListItem } from 'app/features/components/List/helpers'

export const themesList: ListItem[] = [
  {
    title: 'Vehicle Law',
    description: '87 вопросов',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: VehicleLaw,
    link: `/questions/VehicleLaw`,
  },
  {
    title: 'Road Traffic Law',
    description: '23 вопроса',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: RoadTrafficLaw,
    link: `/questions/RoadTrafficLaw`,
  },
  {
    title: 'Traffic Signs',
    description: '167 вопросов',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: TrafficSigns,
    link: `/questions/TrafficSigns`,
  },
  {
    title: 'Safe Driving',
    description: '56 вопросов',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: SafeDriving,
    link: `/questions/SafeDriving`,
  },
  {
    title: 'Techniques Of Safe Driving',
    description: '23 вопроса',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: TechniquesOfSafeDriving,
    link: `/questions/TechniquesOfSafeDriving`,
  },
  {
    title: 'Vehicle Maintenance',
    description: '231 вопрос',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: VehicleMaintenance,
    link: `/questions/VehicleMaintenance`,
  },
]
