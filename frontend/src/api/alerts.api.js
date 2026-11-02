import { apiClient } from './client';

export const getAlerts = async () => {
  return apiClient.get('/alerts');
};

export const patchAlert = async (id, data) => {
  return apiClient.patch(`/alerts/${id}`, data);
};

