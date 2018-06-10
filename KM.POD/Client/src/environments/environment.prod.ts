import { getApiEndpoints } from './dev/endpoints';

const BACKEND_URL = '';

export const environment = {
  production: true,
  ENDPOINTS: getApiEndpoints(BACKEND_URL)
};
