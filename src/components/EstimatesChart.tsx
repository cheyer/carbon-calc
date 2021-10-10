import { SelectChangeEvent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { groupBy } from "lodash";
import { useMemo, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import Country from "../types/Country";
import Estimate from "../types/Estimate";
import getCountryName from "../utils/getCountryName";
import CountryFilter from "./CountryFilter";

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
  countries: Country[];
  estimates: Estimate[];
}

const getGraphData = (
  estimates: Estimate[],
  filterCountry: string
): Series[] => {
  const cleanedEstimates = estimates.map((estimate) => ({
    country: estimate.data.attributes.country,
    id: estimate.data.id,
    x: estimate.data.attributes.estimated_at as any,
    y: estimate.data.attributes.carbon_mt,
  }));

  const groupedByCountry = groupBy(cleanedEstimates, "country");

  const chartData = Object.keys(groupedByCountry).map((key) => ({
    label: getCountryName(key),
    data: groupedByCountry[key],
  }));

  if (filterCountry !== "") {
    return chartData.filter(
      (item) => item.label === getCountryName(filterCountry)
    );
  }
  return chartData;
};

const EstimatesChart: React.FC<Props> = ({ countries, estimates }) => {
  const [filterCountry, setFilterCountry] = useState("");

  const handleChangeFilterCountry = (event: SelectChangeEvent) =>
    setFilterCountry(event.target.value);

  const handleResetFilterCountry = () => setFilterCountry("");

  const data = useMemo(
    () => getGraphData(estimates, filterCountry),
    [estimates, filterCountry]
  );

  const primaryAxis = useMemo<AxisOptions<EstimateData>>(
    () => ({
      getValue: (item) => new Date(item.x),
      scaleType: "time",
    }),
    []
  );

  const secondaryAxes = useMemo<AxisOptions<EstimateData>[]>(
    () => [
      {
        getValue: (item) => item.y,
        elementType: "line",
        scaleType: "linear",
      },
    ],
    []
  );

  return (
    <div>
      <Typography variant="h3">Chart</Typography>
      <Box py={2}>
        <CountryFilter
          countries={countries}
          filterCountry={filterCountry}
          onChangeFilterCountry={handleChangeFilterCountry}
          onReset={handleResetFilterCountry}
        />
      </Box>
      <div style={{ height: 300 }}>
        <Chart options={{ data, primaryAxis, secondaryAxes }} />
      </div>
    </div>
  );
};

export default EstimatesChart;
