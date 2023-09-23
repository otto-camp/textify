import * as z from 'zod';

export const textSchemaWithMin = z.object({
  content: z.string().min(100, {
    message: 'Content must be minimum 100 characters long.',
  }),
});

export const textSchemaWithMax = z.object({
  content: z.string().max(1000, {
    message: 'Content must not exceed 1000 characters.',
  }),
});


