import { Loader } from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EstimatesChart from '../../components/molecules/EstimatesChart/EstimatesChart';
import { Button } from '../../components/atoms/Button/Button';
import Divider from '../../components/atoms/Divider/Divider';
import Headline from '../../components/atoms/Headline/Headline';
import Select from '../../components/atoms/Select/Select';
import Estimate from '../../types/Estimate';
import { getEstimates } from '../../utils/backendService';
import { COUNTRIES } from '../../utils/constants';

const ChartPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Estimate[]>([]);

  const fetchEstimates = async () => {
    const data = await getEstimates();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEstimates();
  }, []);

  const [filterCountry, setFilterCountry] = useState('');

  const handleChangeFilterCountry = (event: ChangeEvent<HTMLSelectElement>) =>
    setFilterCountry(event.target.value);
  const handleResetFilterCountry = () => setFilterCountry('');

  const navigate = useNavigate();
  const handleAddData = () => navigate('/add-data');

  return (
    <div>
      <Headline
        title="Emissions"
        description="Discover the emissions. You can filter by country."
      />
      <Divider />
      <div className="flex justify-between items-end p-4 rounded-md ">
        <Select
          value={filterCountry}
          onChange={handleChangeFilterCountry}
          options={COUNTRIES}
          label="Filter"
          className="flex-grow pr-4"
        />
        <Button onClick={handleResetFilterCountry}>Reset</Button>
      </div>
      {isLoading ? (
        <div className="flex h-80 shrink-0 items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <Loader className="h-10 w-10 text-slate-400 animate-[spin_2s_linear_infinite]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
              Loading
            </h3>
          </div>
        </div>
      ) : (
        <EstimatesChart
          filterCountry={filterCountry}
          estimates={data}
          onReset={handleResetFilterCountry}
          onAddData={handleAddData}
        />
      )}
    </div>
  );
};

export default ChartPage;
