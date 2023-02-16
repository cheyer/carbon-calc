import { CircleSlashed, Library, ListMusic, Music2, PlayCircle, Radio } from 'lucide-react';
import { MenuGroupProps } from '../components/molecules/Menu/Menu';

export const mockMenuGroup: MenuGroupProps[] = [
  {
    label: 'Discover',
    menuButtons: [
      {
        text: 'Listen Now',
        Icon: PlayCircle,
        to: '/'
      },
      {
        text: 'Browse',
        Icon: CircleSlashed,
        to: '/'
      },
      {
        text: 'Radio',
        Icon: Radio,
        to: '/'
      }
    ]
  },
  {
    label: 'Library',
    menuButtons: [
      {
        text: 'Playlist',
        Icon: ListMusic,
        to: '/'
      },
      {
        text: 'Songs',
        Icon: Music2,
        to: '/'
      },
      {
        text: 'Albums',
        Icon: Library,
        to: '/'
      }
    ]
  }
];

export const mockUser = { firstName: 'Chris', lastName: 'Heyer' };
