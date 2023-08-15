import { toast } from 'sonner';
import { z } from 'zod';

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    toast(errors.join('\n'));
  } else if (err instanceof Error) {
    toast(err.message);
  } else {
    toast('Something went wrong, please try again later.');
  }
}
