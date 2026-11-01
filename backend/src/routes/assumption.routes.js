import { Router } from 'express';
import { getAssumptions, putAssumption } from '../controllers/assumption.controller.js';
import { validate } from '../validators/validate.middleware.js';
import { updateAssumptionSchema } from '../validators/assumption.validator.js';

const router = Router();

router.get('/', getAssumptions);
router.put('/', validate(updateAssumptionSchema), putAssumption);

export default router;

