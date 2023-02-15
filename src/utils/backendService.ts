import axios from 'axios';
import ElectricityEstimate from '../types/ElectricityEstimate';
import Estimate from '../types/Estimate';
import { API, TOKEN } from './constants';

const ESTIMATE_API = `${API}/estimates`;

const config = {
  headers: { Authorization: `Bearer ${TOKEN}` }
};

export const createEstimate = (data: ElectricityEstimate) => axios.post(ESTIMATE_API, data, config);

export const getEstimates = (): Promise<Estimate[]> =>
  axios.get(ESTIMATE_API, config).then((response) => response.data);
