import { describe, expect, it } from '@jest/globals';
import { addDays, subDays } from 'date-fns';

import { createEventSchema } from './schema';

describe('Event schemas', () => {
  describe('createEventSchema', () => {
    it('should pass if required field are filled correctly', async () => {
      const data = {
        title: 'Event title',
        slug: 'event-slug',
        maxAttendees: 10,
        date: addDays(new Date(), 1),
        location: 'Event location',
      };

      const valid = createEventSchema.safeParse(data);

      expect(valid.success).toEqual(false);
    });

    it('should validate each field individually title field are not filled', async () => {
      const defaultData = {
        title: 'Event title',
        slug: 'event-slug',
        maxAttendees: 10,
        date: addDays(new Date(), 1),
        location: 'Event location',
      };

      const noTitle = { ...defaultData, title: '' };
      const noTitleValid = createEventSchema.safeParse(noTitle);
      expect(noTitleValid.success).toEqual(false);

      const noSlug = { ...defaultData, slug: '' };
      const noSlugValid = createEventSchema.safeParse(noSlug);
      expect(noSlugValid.success).toEqual(false);

      const noMaxAttendees = { ...defaultData, maxAttendees: undefined };
      const noMaxAttendeesValid = createEventSchema.safeParse(noMaxAttendees);
      expect(noMaxAttendeesValid.success).toEqual(false);

      const noDate = { ...defaultData, date: undefined };
      const noDateValid = createEventSchema.safeParse(noDate);
      expect(noDateValid.success).toEqual(false);

      const pastDate = { ...defaultData, date: subDays(new Date(), 1) };
      const pastDateValid = createEventSchema.safeParse(pastDate);
      expect(pastDateValid.success).toEqual(false);

      const noLocation = { ...defaultData, location: undefined };
      const noLocationValid = createEventSchema.safeParse(noLocation);
      expect(noLocationValid.success).toEqual(false);
    });
  });
});
