export interface AvatarProps {
  firstName: string;
  lastName: string;
}

const getInitials = (name1: string, name2: string) => `${name1.charAt(0)}${name2.charAt(0)}`;

const Avatar = ({ firstName, lastName }: AvatarProps) => (
  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full justify-center items-center align-middle bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
    {getInitials(firstName, lastName)}
  </div>
);

export default Avatar;
