import { Controller, Get, Post, Body } from '@nestjs/common';

import { type Event, type CreateEventDto } from '../../../dto/types';
import { EventsService } from '../provider/events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    this.eventsService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }
}
