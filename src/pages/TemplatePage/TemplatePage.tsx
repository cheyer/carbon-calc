import { ReactNode } from 'react';
import { AvatarProps } from '../../components/atoms/Avatar/Avatar';
import { MenuGroupProps } from '../../components/molecules/Menu/Menu';
import Sidebar from '../../components/molecules/Sidebar/Sidebar';
import TopBar from '../../components/molecules/TopBar/TopBar';

interface Props {
  children: ReactNode;
  user: AvatarProps;
  menuConfig: MenuGroupProps[];
}

const TemplatePage = ({ children, menuConfig, user }: Props) => (
  <div className="flex items-start">
    <div className="max-w-xs h-screen border-r border-r-slate-200 dark:border-r-slate-700">
      <Sidebar menuGroup={menuConfig} />
    </div>
    <div className="flex-grow">
      <div className="px-8 py-6">
        <TopBar user={user} />
      </div>
      <div className="px-6 py-2">{children}</div>
    </div>
  </div>
);

export default TemplatePage;
