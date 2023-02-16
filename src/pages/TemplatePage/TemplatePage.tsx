import { Cog, Factory, Info, PlusSquare, Table2, Trees } from 'lucide-react';
import Sidebar from '../../components/molecules/Sidebar/Sidebar';

const menuGroup = [
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

const TemplatePage = () => (
  <div>
    <div className="max-w-xs h-screen border-r border-r-slate-200 dark:border-r-slate-700">
      <Sidebar menuGroup={menuGroup} />
    </div>
  </div>
);

export default TemplatePage;
