import { Router } from 'express';
import healthRoutes from './health.routes.js';
import runRoutes from './run.routes.js';
import alertRoutes from './alert.routes.js';
import assumptionRoutes from './assumption.routes.js';
import experimentRoutes from './experiment.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/runs', runRoutes);
router.use('/alerts', alertRoutes);
router.use('/assumptions', assumptionRoutes);
router.use('/experiments', experimentRoutes);

export default router;

