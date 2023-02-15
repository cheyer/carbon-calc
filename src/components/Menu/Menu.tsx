import { Button, SelectChangeEvent, Typography, Stack } from '@mui/material';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';

interface Props {}

interface MenuItemProps {
  label: string;
  icon: any;
}

interface MenuGroupProps {
  label: string;
  menuItems: MenuItemProps[];
}

// https://mui.com/material-ui/material-icons/?query=tre&theme=Outlined

const MenuItem = ({ label, icon }: MenuItemProps) => (
  <Button
    style={{ paddingLeft: 'xl', justifyContent: 'start' }}
    color="inherit"
    variant="text"
    onClick={() => {}}
    startIcon={icon}
  >
    {label}
  </Button>
);

const MenuGroup = ({ menuItems }: MenuGroupProps) => (
  <div>
    <Typography>Discover</Typography>
    <Stack direction="column">
      {menuItems.map((item) => (
        <MenuItem {...item} key={item.label} />
      ))}
    </Stack>
  </div>
);

const Menu = ({}: Props) => {
  const menuConfig: MenuItemProps[] = [
    { label: 'Current Emissions', icon: <FactoryOutlinedIcon /> },
    { label: 'Current Offsets', icon: <ForestOutlinedIcon /> }
  ];

  return (
    <div>
      <Stack direction={{ xs: 'column', sm: 'column' }} spacing={{ xs: 4, sm: 2 }} marginBottom={2}>
        <MenuGroup label="Discover" menuItems={menuConfig} />
      </Stack>
    </div>
  );
};

export default Menu;
