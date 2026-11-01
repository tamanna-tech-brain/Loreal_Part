import { asyncHandler } from '../utils/asyncHandler.js';
import { runService } from '../services/run.service.js';
import { kpiService } from '../services/kpi.service.js';
import { alertService } from '../services/alert.service.js';
import { ledgerService } from '../services/ledger.service.js';

export const createRun = asyncHandler(async (req, res) => {
  // Phase 1 stub returning 501 (fully activated with Simulator in Phase 2)
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Run creation and simulator stream will be activated in Phase 2',
  });
});

export const getRunById = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Run retrieval will be activated in Phase 2',
  });
});

export const pauseRun = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Run pause/resume control will be activated in Phase 2',
  });
});

export const getRunKpis = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Run KPIs will be activated in Phase 7',
  });
});

export const getRunAlerts = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Alerts retrieval will be activated in Phase 3',
  });
});

export const getRunLedger = asyncHandler(async (req, res) => {
  res.status(501).json({
    success: false,
    statusCode: 501,
    message: 'Resource ledger will be activated in Phase 5',
  });
});

