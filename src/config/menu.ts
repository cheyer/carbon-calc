import { Cog, Factory, Info, PlusSquare, Table2, Trees } from 'lucide-react';
import { MenuGroupProps } from '../components/molecules/Menu/Menu';

export const menuConfig: MenuGroupProps[] = [
  {
    label: 'Discover',
    menuButtons: [
      {
        text: 'Emissions',
        Icon: Factory,
        to: '/'
      },
      {
        text: 'Offset',
        Icon: Trees,
        to: '/offset'
      }
    ]
  },
  {
    label: 'Data',
    menuButtons: [
      {
        text: 'Add',
        Icon: PlusSquare,
        to: '/add-data'
      },
      {
        text: 'Browse',
        Icon: Table2,
        to: '/browse'
      }
    ]
  },
  {
    label: 'Settings',
    menuButtons: [
      {
        text: 'Preferences',
        Icon: Cog,
        to: '/preferences'
      },
      {
        text: 'About',
        Icon: Info,
        to: '/info'
      }
    ]
  }
];
