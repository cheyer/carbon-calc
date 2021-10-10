import { Button, SelectChangeEvent, Stack, Typography } from "@mui/material";
import Country from "../types/Country";
import Select from "./Select";

interface Props {
  countries: Country[];
  filterCountry?: string;
  onChangeFilterCountry: (event: SelectChangeEvent) => void;
  onReset: () => void;
}

const CountryFilter: React.FC<Props> = ({
  countries,
  filterCountry,
  onChangeFilterCountry,
  onReset,
}) => (
  <div>
    <Typography variant="body1" marginBottom={2}>
      Filter graph for following country:
    </Typography>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 4, sm: 2 }}
      marginBottom={2}
    >
      <Select
        label="Filter Country"
        value={filterCountry}
        options={countries}
        onChange={onChangeFilterCountry}
      />
      <Button variant="contained" onClick={onReset}>
        Reset
      </Button>
    </Stack>
  </div>
);

export default CountryFilter;
