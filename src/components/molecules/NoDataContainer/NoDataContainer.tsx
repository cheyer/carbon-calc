import { Database, Plus, XCircle } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

interface Props {
  onReset: () => void;
  onAddData: () => void;
}

const NoDataContainer = ({ onReset, onAddData }: Props) => (
  <div className="flex h-80 shrink-0 items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
    <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
      <Database className="h-10 w-10 text-slate-400" />
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
        No data added
      </h3>
      <p className="mt-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
        You have not added any data for this country yet. Add one below, or reset the country
        filter.
      </p>
      <div className="flex gap-2">
        <Button onClick={onAddData}>
          <Plus className="mr-2 h-4 w-4" /> Add Data
        </Button>
        <Button onClick={onReset} variant="destructive">
          <XCircle className="mr-2 h-4 w-4" />
          Reset Filter
        </Button>
      </div>
    </div>
  </div>
);

export default NoDataContainer;
