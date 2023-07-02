import VehicleLaw from '../components/icons/vehicleLaw.png'
import RoadTrafficLaw from '../components/icons/roadTrafficLaw.png'
import TrafficSigns from '../components/icons/trafficSigns.png'
import SafeDriving from '../components/icons/safeDriving.png'
import VehicleMaintenance from '../components/icons/vehicleMaintenance.png'
import TechniquesOfSafeDriving from '../components/icons/techniquesOfSafeDriving.png'
import Test from '../components/icons/test.png'

import { ListItem } from 'app/features/components/List/helpers'

export const themesList: ListItem[] = [
  {
    title: 'Test',
    description: '4 questions',
    color: '#dedede',
    iconColor: '#ababab',
    icon: Test,
    link: `/theme/test`,
  },
  {
    title: 'themes:vehicleLaw',
    description: 'themes:description.vehicleLaw',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: VehicleLaw,
    link: `/theme/vehicleLaw`,
  },
  {
    title: 'themes:roadTrafficLaw',
    description: 'themes:description.roadTrafficLaw',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: RoadTrafficLaw,
    link: `/theme/roadTrafficLaw`,
    disabled: true,
  },
  {
    title: 'themes:trafficSigns',
    description: 'themes:description.trafficSigns',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: TrafficSigns,
    link: `/theme/trafficSigns`,
    disabled: true,
  },
  {
    title: 'themes:safeDriving',
    description: 'themes:description.safeDriving',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: SafeDriving,
    link: `/theme/safeDriving`,
    disabled: true,
  },
  {
    title: 'themes:techniquesOfSafeDriving',
    description: 'themes:description.techniquesOfSafeDriving',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: TechniquesOfSafeDriving,
    link: `/theme/techniquesOfSafeDriving`,
  },
  {
    title: 'themes:vehicleMaintenance',
    description: 'themes:description.vehicleMaintenance',
    color: '#FFDFD1',
    iconColor: '#FFA6A6',
    icon: VehicleMaintenance,
    link: `/theme/vehicleMaintenance`,
  },
]
