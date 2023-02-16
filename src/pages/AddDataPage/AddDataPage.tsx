import { ChangeEvent, useState } from 'react';
import { Button } from '../../components/atoms/Button/Button';
import Divider from '../../components/atoms/Divider/Divider';
import Headline from '../../components/atoms/Headline/Headline';
import { Input } from '../../components/atoms/Input/Input';
import Select from '../../components/atoms/Select/Select';
import { ElectricityUnitType } from '../../types/ElectricityEstimate';
import { COUNTRIES, UNITS } from '../../utils/constants';

const AddDataPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [electricityUnit, setElectricityUnit] = useState<ElectricityUnitType>('mwh');
  const [country, setCountry] = useState('DE');

  const handleChangeUnit = (event: ChangeEvent<HTMLSelectElement>) =>
    setElectricityUnit(event.target.value as ElectricityUnitType);

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) =>
    setCountry(event.target.value);

  const handleSubmit = () => setIsDisabled(true);

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
      <Button onClick={handleSubmit} disabled={isDisabled}>
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
