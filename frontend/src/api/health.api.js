import { apiClient } from './client';

export const getHealthStatus = async () => {
  return apiClient.get('/health');
};

