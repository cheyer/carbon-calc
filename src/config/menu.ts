import { Cog, Factory, Info, PlusSquare, Table2, Trees } from 'lucide-react';
import { MenuGroupProps } from '../components/molecules/Menu/Menu';
import routes from '../app/routes';

export const menuConfig: MenuGroupProps[] = [
  {
    label: 'Discover',
    menuButtons: [
      {
        text: 'Emissions',
        Icon: Factory,
        to: routes.index
      },
      {
        text: 'Offset',
        Icon: Trees,
        to: routes.offset
      }
    ]
  },
  {
    label: 'Data',
    menuButtons: [
      {
        text: 'Add',
        Icon: PlusSquare,
        to: routes.addData
      },
      {
        text: 'Browse',
        Icon: Table2,
        to: routes.browse
      }
    ]
  },
  {
    label: 'Settings',
    menuButtons: [
      {
        text: 'Preferences',
        Icon: Cog,
        to: routes.preferences
      },
      {
        text: 'About',
        Icon: Info,
        to: routes.info
      }
    ]
  }
];
