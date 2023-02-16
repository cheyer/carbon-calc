import Avatar, { AvatarProps } from '../../atoms/Avatar/Avatar';

interface Props {
  user: AvatarProps;
}

const TopBar = ({ user }: Props) => (
  <div>
    <Avatar {...user} />
  </div>
);

export default TopBar;
