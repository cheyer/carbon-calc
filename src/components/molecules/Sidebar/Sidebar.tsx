import HeaderLogo from '../../atoms/HeaderLogo/HeaderLogo';
import Menu, { MenuProps } from '../Menu/Menu';

const Sidebar = ({ menuGroup }: MenuProps) => (
  <aside className="pb-12">
    <HeaderLogo />
    <div className="space-y-4">
      <Menu menuGroup={menuGroup} />
    </div>
  </aside>
);

export default Sidebar;
