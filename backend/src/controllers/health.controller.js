import { asyncHandler } from '../utils/asyncHandler.js';
import { getDbStatus } from '../config/db.js';
import { mlClient } from '../services/ml.client.js';

export const getHealth = asyncHandler(async (req, res) => {
  const mongoStatus = getDbStatus();
  const aiHealth = await mlClient.checkHealth();

  const isHealthy = mongoStatus.connected && aiHealth.connected;

  res.status(isHealthy ? 200 : 207).json({
    status: isHealthy ? 'healthy' : 'degraded',
    service: 'ScrapClock API Backend',
    timestamp: new Date().toISOString(),
    database: {
      connected: mongoStatus.connected,
      state: mongoStatus.state,
      host: mongoStatus.host,
      name: mongoStatus.name,
    },
    aiService: {
      connected: aiHealth.connected,
      url: aiHealth.url,
      data: aiHealth.data || null,
      error: aiHealth.error || null,
    },
  });
});

