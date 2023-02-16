import Avatar, { AvatarProps } from '../../atoms/Avatar/Avatar';

interface Props {
  leftContent?: JSX.Element;
  user: AvatarProps;
}

const TopBar = ({ leftContent, user }: Props) => (
  <div className="flex flex-row justify-end items-center">
    {leftContent ? <div className="flex-grow">{leftContent}</div> : null}
    <p className="pr-4">Welcome</p>
    <Avatar {...user} />
  </div>
);

export default TopBar;
