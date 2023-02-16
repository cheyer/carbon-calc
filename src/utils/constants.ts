import { OptionInterface } from '../components/atoms/Select/Select';
import Country from '../types/Country';

export const API = 'https://www.carboninterface.com/api/v1/';
export const TOKEN = process.env.REACT_APP_API_TOKEN;

export const UNITS: OptionInterface[] = [
  { name: 'mwh', value: 'mwh' },
  { name: 'kwh', value: 'kwh' }
];

export const COUNTRIES: Country[] = [
  { name: 'United States of America', value: 'US' },
  { name: 'Canada', value: 'CA' },
  { name: 'Austria', value: 'AT' },
  { name: 'Belgium', value: 'BE' },
  { name: 'Bulgaria', value: 'BG' },
  { name: 'Croatia', value: 'HR' },
  { name: 'Cyprus', value: 'CY' },
  { name: 'Czechia', value: 'CZ' },
  { name: 'Denmark', value: 'DK' },
  { name: 'EU-27', value: 'EU-27' },
  { name: 'EU27+1', value: 'EU-27+1' },
  { name: 'Estonia', value: 'EE' },
  { name: 'Finland', value: 'FI' },
  { name: 'France', value: 'FR' },
  { name: 'Germany', value: 'DE' },
  { name: 'Greece', value: 'GR' },
  { name: 'Hungary', value: 'GU' },
  { name: 'Ireland', value: 'IE' },
  { name: 'Italy', value: 'IT' },
  { name: 'Latvia', value: 'LV' },
  { name: 'Lithuania', value: 'LT' },
  { name: 'Luxembourg', value: 'LU' },
  { name: 'Malta', value: 'MT' },
  { name: 'Netherlands', value: 'NL' },
  { name: 'Poland', value: 'PL' },
  { name: 'Portugal', value: 'PT' },
  { name: 'Romania', value: 'RO' },
  { name: 'Slovakia', value: 'SK' },
  { name: 'Slovenia', value: 'SI' },
  { name: 'Spain', value: 'ES' },
  { name: 'Sweden', value: 'SE' },
  { name: 'United Kingdom', value: 'GB' }
];
