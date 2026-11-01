import { asyncHandler } from '../utils/asyncHandler.js';
import { alertService } from '../services/alert.service.js';

export const patchAlert = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Alert action logging will be activated in Phase 3',
  });
});

export const getAlerts = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Alert listing will be activated in Phase 3',
  });
});

