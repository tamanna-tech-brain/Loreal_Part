import { z } from 'zod';

export const createRunSchema = z.object({
  body: z.object({
    scenario: z.enum([
      'baseline',
      'moisture_rise',
      'mould_temp_creep',
      'pressure_decay',
      'cycle_time_slowdown',
      'clean_shift',
    ]).default('baseline'),
    seed: z.number().int().default(42),
    mode: z.enum(['final_inspection_only', 'spc_only', 'spc_ml']).default('spc_ml'),
    config: z.record(z.any()).optional(),
  }),
});

export const runIdParamSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Run ID is required'),
  }),
});

