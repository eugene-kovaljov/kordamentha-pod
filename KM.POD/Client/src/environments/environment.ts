import { getApiEndpoints } from './dev/endpoints';

const BACKEND_URL = '/';

export const environment = {
  production: false,
  ENDPOINTS: getApiEndpoints(BACKEND_URL)
};
