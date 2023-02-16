interface Props {
  title: string;
  description: string;
}

const Headline = ({ title, description }: Props) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  </div>
);

export default Headline;
