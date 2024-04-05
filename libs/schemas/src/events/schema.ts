import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string({
    required_error: 'Invalid id',
  }),
  title: z
    .string({
      required_error: 'Title is required',
    })
    .min(3, "Title can't be less than 3 characters"),
  details: z.string().optional(),
  slug: z.string(),
  maxAttendees: z
    .number({
      required_error: 'Max attendees is required',
    })
    .int({
      message: 'Max attendees must be a number',
    })
    .positive({
      message: 'Max attendees must be bigger than 0',
    }),
  date: z.coerce
    .date({
      required_error: 'Event date is required',
    })
    .refine((data) => data > new Date(), {
      message: 'Date must be in the future',
    }),
  location: z
    .string({
      required_error: 'Location is required',
    })
    .min(3, "Location can't be less than 3 characters"),
  createdAt: z.date(),
});

export const createEventSchema = eventSchema
  .extend({
    slug: eventSchema.pick({ slug: true }).optional(),
  })
  .omit({ id: true, createdAt: true, slug: true });

export const updateEventSchema = eventSchema
  .extend({})
  .omit({ createdAt: true, slug: true });
