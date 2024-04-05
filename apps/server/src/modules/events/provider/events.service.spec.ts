import { Test } from '@nestjs/testing';

import { EventsService } from './events.service';

describe('EventsService', () => {
  let service: EventsService;

  beforeAll(async () => {
    const events = await Test.createTestingModule({
      providers: [EventsService],
    }).compile();

    service = events.get<EventsService>(EventsService);
  });

  describe('findAll', () => {
    it('should return "Hello API"', () => {
      expect(service.findAll()).toEqual({ message: 'Hello API' });
    });
  });
});
