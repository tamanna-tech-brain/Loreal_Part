import { asyncHandler } from '../utils/asyncHandler.js';
import { experimentService } from '../services/experiment.service.js';

export const postExperiment = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Experiments runner will be activated in Phase 7',
  });
});

