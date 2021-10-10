import { COUNTRIES } from "./constants";

const getCountryName = (countryCode: string) => {
  const country = COUNTRIES.find(
    (country) => country.value.toLowerCase() === countryCode.toLowerCase()
  );

  if (!country) {
    throw Error(`Country with code ${countryCode} does not exist.`);
  }

  return country.name;
};

export default getCountryName;
