import { Router } from 'express';
import { postExperiment } from '../controllers/experiment.controller.js';
import { validate } from '../validators/validate.middleware.js';
import { runExperimentSchema } from '../validators/experiment.validator.js';

const router = Router();

router.post('/', validate(runExperimentSchema), postExperiment);

export default router;

