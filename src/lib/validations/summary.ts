import * as z from 'zod';

export const summarySchema = z.object({
  content:z.string().min(100,{
    message:'Content must be minimum 100 characters long.'
  })
})