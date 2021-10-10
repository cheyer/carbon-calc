import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";

export interface OptionInterface {
  name: string;
  value: string;
}

interface Props {
  isDisabled?: boolean;
  label: string;
  onChange: (event: SelectChangeEvent) => void;
  options: OptionInterface[];
  value: string | undefined;
}

const Select: React.FC<Props> = ({
  isDisabled,
  label,
  onChange,
  options,
  value,
}) => (
  <FormControl fullWidth>
    <InputLabel id={`${label}-label`}>{label}</InputLabel>
    <MuiSelect
      disabled={isDisabled}
      labelId={`${label}-label`}
      value={value}
      label={label}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);

export default Select;
