import * as React from 'react';
import { cn } from '../../../utils/mergeClassNames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    const borderColor = error ? 'border-red-300' : 'border-slate-300';
    return (
      <div className={className}>
        {label ? <p className="text-sm text-slate-500 dark:text-slate-400 pb-2">{label}</p> : null}
        <input
          className={cn(
            'flex h-10 w-full rounded-md border bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
            borderColor
          )}
          ref={ref}
          {...props}
        />
        {error ? <p className="text-sm text-red-500 dark:text-slate-400 pt-2">{error}</p> : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
