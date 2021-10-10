import ElectricityEstimate from "./ElectricityEstimate";

export interface EstimateAttributes extends Omit<ElectricityEstimate, "type"> {
  estimated_at: string;
  carbon_g: number;
  carbon_lb: number;
  carbon_kg: number;
  carbon_mt: number;
}

// Taken from docs:
// https://docs.carboninterface.com/#/?id=estimate
interface Estimate {
  data: {
    id: string;
    type: "estimate";
    attributes: EstimateAttributes;
  };
}

export default Estimate;
