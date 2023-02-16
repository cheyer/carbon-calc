import MenuButton, { MenuButtonProps } from '../../atoms/MenuButton/MenuButton';

export interface MenuGroupProps {
  label: string;
  menuButtons: MenuButtonProps[];
}

export interface MenuProps {
  menuGroup: MenuGroupProps[];
}

const Menu = ({ menuGroup }: MenuProps) => (
  <>
    {menuGroup.map(({ label, menuButtons }) => (
      <div className="px-6 py-2" key={label}>
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">{label}</h2>
        <div className="space-y-1">
          {menuButtons.map((button) => (
            <MenuButton {...button} key={button.text} />
          ))}
        </div>
      </div>
    ))}
  </>
);

export default Menu;
