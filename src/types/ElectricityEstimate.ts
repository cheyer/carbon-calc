export type ElectricityUnitType = "mwh" | "kwh";

// Taken from docs:
// https://docs.carboninterface.com/#/?id=electricity
interface ElectricityEstimate {
  type: "electricity";
  electricity_unit?: ElectricityUnitType;
  electricity_value: number;
  country: string;
  state?: string;
}

export default ElectricityEstimate;
