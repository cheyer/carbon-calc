import { ChangeEvent, useState } from 'react';
import { Button } from '../../components/atoms/Button/Button';
import Divider from '../../components/atoms/Divider/Divider';
import Headline from '../../components/atoms/Headline/Headline';
import { Input } from '../../components/atoms/Input/Input';
import Select from '../../components/atoms/Select/Select';
import { ElectricityUnitType } from '../../types/ElectricityEstimate';
import { COUNTRIES, UNITS } from '../../utils/constants';
import { createEstimate } from '../../utils/backendService';

const AddDataPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [usage, setUsage] = useState('');
  const [electricityUnit, setElectricityUnit] = useState<ElectricityUnitType>('mwh');
  const [country, setCountry] = useState('DE');
  const [isNumberInvalid, setIsNumberInvalid] = useState(false);

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

  const handleChangeUnit = (event: ChangeEvent<HTMLSelectElement>) =>
    setElectricityUnit(event.target.value as ElectricityUnitType);

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) =>
    setCountry(event.target.value);

  const isFormValid = () => !isNumberInvalid && electricityUnit && usage && country;

  const handleClick = () => handleSubmit(country, electricityUnit, usage);

  const handleSubmit = async (
    country: string,
    electricityUnit: ElectricityUnitType,
    usage: string
  ) => {
    setIsDisabled(true);

    await createEstimate({
      type: 'electricity',
      country,
      electricity_unit: electricityUnit,
      electricity_value: parseFloat(usage)
    });
    setUsage('');
    setIsDisabled(false);
  };

  return (
    <div>
      <Headline
        title="Add data"
        description="Create a new carbon estimate with electricity usage."
      />
      <Divider />
      <Input
        label="Electricity Usage"
        placeholder="Electricity Usage *"
        className="mb-4"
        disabled={isDisabled}
        type="number"
        value={usage}
        onChange={handleChangeUsage}
        error={isNumberInvalid ? 'Number must be positive' : undefined}
      />
      <Select
        value={country}
        options={COUNTRIES}
        onChange={handleChangeCountry}
        label="Country"
        className="mb-4"
        disabled={isDisabled}
      />
      <Select
        value={electricityUnit}
        onChange={handleChangeUnit}
        options={UNITS}
        label="Unit"
        className="mb-4"
        disabled={isDisabled}
      />
      <Button onClick={handleClick} disabled={isDisabled || !isFormValid()}>
        {isDisabled ? 'Loading...' : 'Submit'}
      </Button>
    </div>
  );
};

export default AddDataPage;

/**
 * Todo
 * - form validaton
 * - saving works / failure also
 * - toast
 * - reset form
 *
 */
