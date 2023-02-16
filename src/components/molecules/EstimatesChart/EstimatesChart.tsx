import { groupBy } from 'lodash';
import { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import Estimate from '../../../types/Estimate';
import getCountryName from '../../../utils/getCountryName';
import NoDataContainer from '../NoDataContainer/NoDataContainer';

type Series = {
  data: EstimateData[];
  label: string;
};

interface EstimateData {
  country: string;
  id: string;
  x: string;
  y: number;
}

interface Props {
  filterCountry: string;
  estimates: Estimate[];
  onReset: () => void;
  onAddData: () => void;
}

const getGraphData = (estimates: Estimate[], filterCountry: string): Series[] => {
  const cleanedEstimates = estimates.map((estimate) => ({
    country: estimate.data.attributes.country,
    id: estimate.data.id,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    x: estimate.data.attributes.estimated_at as any,
    y: estimate.data.attributes.carbon_mt
  }));

  const groupedByCountry = groupBy(cleanedEstimates, 'country');

  const chartData = Object.keys(groupedByCountry).map((key) => ({
    label: getCountryName(key),
    data: groupedByCountry[key]
  }));

  if (filterCountry !== '') {
    return chartData.filter((item) => item.label === getCountryName(filterCountry));
  }
  return chartData;
};

const EstimatesChart = ({ filterCountry, estimates, onReset, onAddData }: Props) => {
  const data = useMemo(() => getGraphData(estimates, filterCountry), [estimates, filterCountry]);

  const primaryAxis = useMemo<AxisOptions<EstimateData>>(
    () => ({
      getValue: (item) => new Date(item.x),
      scaleType: 'time'
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<EstimateData>[]>(
    () => [
      {
        getValue: (item) => item.y,
        elementType: 'line',
        scaleType: 'linear'
      }
    ],
    []
  );
  console.log({ data });
  return (
    <div className="h-80">
      {data.length > 0 ? (
        <Chart options={{ data, primaryAxis, secondaryAxes }} />
      ) : (
        <NoDataContainer onReset={onReset} onAddData={onAddData} />
      )}
    </div>
  );
};

export default EstimatesChart;
