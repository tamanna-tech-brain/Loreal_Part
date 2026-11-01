import axios from 'axios';
import { config } from '../config/env.js';

class MlClient {
  constructor() {
    this.baseUrl = config.aiServiceUrl;
    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: 5000,
    });
  }

  async checkHealth() {
    try {
      const response = await this.client.get('/health');
      return {
        connected: true,
        data: response.data,
      };
    } catch (err) {
      return {
        connected: false,
        error: err.message,
        url: `${this.baseUrl}/health`,
      };
    }
  }

  async predict(cycleData) {
    try {
      const response = await this.client.post('/predict', cycleData);
      return response.data;
    } catch (err) {
      console.error('[ML Client] Predict error:', err.message);
      // Fallback response if AI service is temporarily degraded
      return {
        prob: 0.05,
        shapTop3: [
          { feature: 'resinMoisture', shapValue: 0.1, direction: 'normal' },
          { feature: 'mouldTemp', shapValue: 0.05, direction: 'normal' },
          { feature: 'injPressure', shapValue: 0.03, direction: 'normal' },
        ],
        fallback: true,
      };
    }
  }

  async train(trainConfig) {
    const response = await this.client.post('/train', trainConfig);
    return response.data;
  }
}

export const mlClient = new MlClient();

