import { Test } from '@nestjs/testing';

import { EventsService } from '../provider/events.service';

import { EventsController } from './events.controller';

describe('Controller', () => {
  let service: EventsController;

  beforeAll(async () => {
    const events = await Test.createTestingModule({
      controllers: [EventsController],
      providers: [EventsService],
    }).compile();

    service = events.get<EventsController>(EventsController);
  });

  describe('create', () => {
    it('should return "Hello API"', async () => {
      const response = await service.create({
        title: 'Controller Event title',
        maxAttendees: 10,
        date: new Date('2034-01-01'),
        location: 'Event location',
      });

      expect(response).toEqual('Event created');
    });
  });
});
