import { Box, Button, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Country from '../types/Country';
import { ElectricityUnitType } from '../types/ElectricityEstimate';
import { UNITS } from '../utils/constants';
import Select from './Select';

interface Props {
  countries: Country[];
  isDisabled: boolean;
  onSubmit: (country: string, electricityUnit: ElectricityUnitType, usage: string) => void;
}

const Form: React.FC<Props> = ({ countries, isDisabled, onSubmit }) => {
  const [electricityUnit, setElectricityUnit] = useState<ElectricityUnitType>('mwh');
  const [country, setCountry] = useState('DE');
  const [usage, setUsage] = useState('');
  const [isNumberInvalid, setIsNumberInvalid] = useState(false);

  const handleChangeUnit = (event: SelectChangeEvent) =>
    setElectricityUnit(event.target.value as ElectricityUnitType);

  const handleChangeCountry = (event: SelectChangeEvent) => setCountry(event.target.value);

  const handleChangeUsage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const parsedValue = parseFloat(value);

    if (parsedValue <= 0) {
      setIsNumberInvalid(true);
    } else {
      setIsNumberInvalid(false);
    }
    setUsage(value);
  };

  const isFormValid = () => !isNumberInvalid && electricityUnit && usage && country;

  const handleClick = () => onSubmit(country, electricityUnit, usage);

  return (
    <Box marginBottom={5}>
      <Typography marginBottom={4}>Create a new carbon estimate with electricity usage:</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2 }} marginBottom={2}>
        <TextField
          label="Electricity Usage"
          variant="outlined"
          type="number"
          required
          disabled={isDisabled}
          fullWidth
          value={usage}
          onChange={handleChangeUsage}
          helperText={isNumberInvalid ? 'Usage must be a positive number!' : undefined}
          error={isNumberInvalid}
        />

        <Select
          label="Country"
          value={country}
          options={countries}
          onChange={handleChangeCountry}
          isDisabled={isDisabled}
        />

        <Select
          label="Unit"
          value={electricityUnit}
          options={UNITS}
          onChange={handleChangeUnit}
          isDisabled={isDisabled}
        />
      </Stack>

      <Button variant="contained" onClick={handleClick} disabled={isDisabled || !isFormValid()}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
