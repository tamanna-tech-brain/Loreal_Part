import { apiClient } from './client';

export const createRun = async (data) => {
  return apiClient.post('/runs', data);
};

export const getRunById = async (id) => {
  return apiClient.get(`/runs/${id}`);
};

export const pauseRun = async (id) => {
  return apiClient.post(`/runs/${id}/pause`);
};

export const getRunKpis = async (id) => {
  return apiClient.get(`/runs/${id}/kpis`);
};

export const getRunAlerts = async (id) => {
  return apiClient.get(`/runs/${id}/alerts`);
};

export const getRunLedger = async (id) => {
  return apiClient.get(`/runs/${id}/ledger`);
};
