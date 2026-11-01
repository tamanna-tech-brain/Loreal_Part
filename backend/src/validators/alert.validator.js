import { z } from 'zod';

export const patchAlertSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Alert ID is required'),
  }),
  body: z.object({
    outcome: z.enum(['fixed', 'not fixed', 'false alarm']),
    notes: z.string().optional(),
  }),
});

