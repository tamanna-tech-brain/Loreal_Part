import { z } from 'zod';

export const updateAssumptionSchema = z.object({
  body: z.object({
    key: z.string().min(1),
    value: z.number(),
    unit: z.string().optional(),
    source: z.string().optional(),
    low: z.number().optional(),
    high: z.number().optional(),
    description: z.string().optional(),
  }),
});

