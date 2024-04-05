import { z } from 'zod';

import { eventSchema, createEventSchema, updateEventSchema } from './schema';
export type EventProps = z.infer<typeof eventSchema>;
export type CreateEventDto = z.infer<typeof createEventSchema>;
export type UpdateEventDto = z.infer<typeof updateEventSchema>;
