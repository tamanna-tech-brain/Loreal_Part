import { Router } from 'express';
import {
  createRun,
  getRunById,
  pauseRun,
  getRunKpis,
  getRunAlerts,
  getRunLedger,
} from '../controllers/run.controller.js';
import { validate } from '../validators/validate.middleware.js';
import { createRunSchema, runIdParamSchema } from '../validators/run.validator.js';

const router = Router();

router.post('/', validate(createRunSchema), createRun);
router.get('/:id', validate(runIdParamSchema), getRunById);
router.post('/:id/pause', validate(runIdParamSchema), pauseRun);
router.get('/:id/kpis', validate(runIdParamSchema), getRunKpis);
router.get('/:id/alerts', validate(runIdParamSchema), getRunAlerts);
router.get('/:id/ledger', validate(runIdParamSchema), getRunLedger);

export default router;

