import { z } from 'zod';

export const runExperimentSchema = z.object({
  body: z.object({
    runsPerScenario: z.number().int().min(1).max(50).default(10),
    scenarios: z.array(z.string()).optional(),
    seeds: z.array(z.number()).optional(),
  }),
});

