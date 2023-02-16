import { CircleSlashed, Library, ListMusic, Music2, PlayCircle, Radio } from 'lucide-react';

export const mockMenuGroup = [
  {
    label: 'Discover',
    menuButtons: [
      {
        text: 'Listen Now',
        Icon: PlayCircle,
        selected: true
      },
      {
        text: 'Browse',
        Icon: CircleSlashed
      },
      {
        text: 'Radio',
        Icon: Radio
      }
    ]
  },
  {
    label: 'Library',
    menuButtons: [
      {
        text: 'Playlist',
        Icon: ListMusic
      },
      {
        text: 'Songs',
        Icon: Music2
      },
      {
        text: 'Albums',
        Icon: Library
      }
    ]
  }
];

export const mockUser = { firstName: 'Chris', lastName: 'Heyer' };
