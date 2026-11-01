import { Router } from 'express';
import { patchAlert, getAlerts } from '../controllers/alert.controller.js';
import { validate } from '../validators/validate.middleware.js';
import { patchAlertSchema } from '../validators/alert.validator.js';

const router = Router();

router.get('/', getAlerts);
router.patch('/:id', validate(patchAlertSchema), patchAlert);

export default router;

