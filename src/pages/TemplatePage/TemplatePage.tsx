import { AvatarProps } from '../../components/atoms/Avatar/Avatar';
import { MenuGroupProps } from '../../components/molecules/Menu/Menu';
import Sidebar from '../../components/molecules/Sidebar/Sidebar';
import TopBar from '../../components/molecules/TopBar/TopBar';

interface Props {
  content: JSX.Element;
  user: AvatarProps;
  menuConfig: MenuGroupProps[];
}

const TemplatePage = ({ content, menuConfig, user }: Props) => (
  <div className="flex items-start">
    <div className="max-w-xs h-screen border-r border-r-slate-200 dark:border-r-slate-700">
      <Sidebar menuGroup={menuConfig} />
    </div>
    <div className="flex-grow">
      <TopBar user={user} />
      <div>{content}</div>
    </div>
  </div>
);

export default TemplatePage;
