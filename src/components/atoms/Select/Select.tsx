import { ChangeEventHandler } from 'react';

export interface OptionInterface {
  name: string;
  value: string;
}

interface Props {
  disabled?: boolean;
  label?: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: OptionInterface[];
  value: string | undefined;
  className?: string;
}

const Select = ({ disabled, label, onChange, options, value, className }: Props) => (
  <div className={className}>
    {label ? <p className="text-sm text-slate-500 dark:text-slate-400 pb-2">{label}</p> : null}
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900">
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
