import { Cog, Factory, Info, PlusSquare, Table2, Trees } from 'lucide-react';
import { MenuGroupProps } from '../components/molecules/Menu/Menu';

export const menuConfig: MenuGroupProps[] = [
  {
    label: 'Discover',
    menuButtons: [
      {
        text: 'Emissions',
        Icon: Factory,
        selected: true
      },
      {
        text: 'Offset',
        Icon: Trees
      }
    ]
  },
  {
    label: 'Data',
    menuButtons: [
      {
        text: 'Add',
        Icon: PlusSquare
      },
      {
        text: 'Browse',
        Icon: Table2
      }
    ]
  },
  {
    label: 'Settings',
    menuButtons: [
      {
        text: 'Preferences',
        Icon: Cog
      },
      {
        text: 'About',
        Icon: Info
      }
    ]
  }
];
