import { z } from 'zod';

export const fileInputSchema = z.object({
  file: z
    .unknown()
    .refine((val) => {
      if (!Array.isArray(val)) return false;
      if (val.some((file) => !(file instanceof File))) return false;
      return true;
    }, 'Must be an array of File')
    .optional()
    .nullable()
    .default(null),
});

export const fileInputSchemaWithResponse = fileInputSchema.extend({
  response: z.string(),
  userId: z.string(),
});
