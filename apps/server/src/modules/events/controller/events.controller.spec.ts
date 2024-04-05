import { Test, type TestingModule } from '@nestjs/testing';

import { EventsService } from '../provider/events.service';

import { EventsController } from './events.controller';

describe('EventsController', () => {
  let events: TestingModule;

  beforeAll(async () => {
    events = await Test.createTestingModule({
      imports: [],
      controllers: [EventsController],
      providers: [EventsService],
    }).compile();
  });

  describe('findAll', () => {
    it('should return "Hello API"', () => {
      const eventsController = events.get<EventsController>(EventsController);
      expect(eventsController.findAll()).toEqual({ message: 'Hello API' });
    });
  });
});
