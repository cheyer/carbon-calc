import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EstimatesChart from "./components/EstimatesChart";
import Form from "./components/Form";
import { ElectricityUnitType } from "./types/ElectricityEstimate";
import Estimate from "./types/Estimate";
import { createEstimate, getEstimates } from "./utils/backendService";
import { COUNTRIES } from "./utils/constants";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Estimate[]>([]);

  const fetchEstimates = async () => {
    const data = await getEstimates();
    setData(data);
  };

  useEffect(() => {
    fetchEstimates();
  }, []);

  const handleSubmit = async (
    country: string,
    electricityUnit: ElectricityUnitType,
    usage: string
  ) => {
    setIsLoading(true);

    await createEstimate({
      type: "electricity",
      country,
      electricity_unit: electricityUnit,
      electricity_value: parseFloat(usage),
    });

    await fetchEstimates();

    setIsLoading(false);
  };

  return (
    <Container maxWidth="md">
      <Typography fontWeight="bold" variant="h2" marginBottom={5}>
        Carbon Calculator
      </Typography>
      <Form
        countries={COUNTRIES}
        isDisabled={isLoading}
        onSubmit={handleSubmit}
      />
      <EstimatesChart countries={COUNTRIES} estimates={data} />
    </Container>
  );
}

export default App;
