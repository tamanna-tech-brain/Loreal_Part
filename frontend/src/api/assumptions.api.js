import { apiClient } from './client';

export const getAssumptions = async () => {
  return apiClient.get('/assumptions');
};

export const updateAssumption = async (data) => {
  return apiClient.put('/assumptions', data);
};

