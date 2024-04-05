import { z } from 'zod';

export const createEventSchema = z.object({
  title: z.string().min(3),
  details: z.string().nullable(),
  slug: z.string().min(3),
  maxAttendees: z.number().int().positive(),
  date: z.coerce
    .date()
    .refine((data) => data > new Date(), {
      message: 'Date must be in the future',
    }),
  location: z.string().min(3),
});
