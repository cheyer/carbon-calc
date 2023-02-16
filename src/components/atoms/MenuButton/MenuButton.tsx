import { LucideIcon } from 'lucide-react';

export interface MenuButtonProps {
  text: string;
  Icon?: LucideIcon;
  selected?: boolean;
}

const menuIconProps = { size: 16, className: 'mr-2 h-4 w-4' };

const baseStyle =
  'active:scale-95 inline-flex items-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 h-9 px-2 rounded-md w-full justify-start';
const normalStyle = `${baseStyle} disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent`;
const selectedStyle = `${baseStyle} dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100`;

const MenuButton = ({ text, Icon, selected }: MenuButtonProps) => (
  <button className={selected ? selectedStyle : normalStyle}>
    {Icon ? <Icon {...menuIconProps} /> : null}
    {text}
  </button>
);

export default MenuButton;
