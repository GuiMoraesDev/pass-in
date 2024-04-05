import { Test } from '@nestjs/testing';

import { EventsService } from './events.service';

describe('Service', () => {
  let service: EventsService;

  beforeAll(async () => {
    const events = await Test.createTestingModule({
      providers: [EventsService],
    }).compile();

    service = events.get<EventsService>(EventsService);
  });

  describe('create', () => {
    it('should return "Hello API"', async () => {
      const response = await service.create({
        title: 'Service Event title',
        maxAttendees: 10,
        date: new Date('2034-01-01'),
        location: 'Event location',
        slug: 'service-event-title',
      });

      expect(response).toEqual('Event created');
    });
  });
});
