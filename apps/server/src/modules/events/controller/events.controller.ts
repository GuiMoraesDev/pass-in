import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateEventDto, createEventSchema } from '@pass-in/schemas';

import { ZodPipe } from '../../../pipes/zod.pipe';
import { EventsService } from '../provider/events.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  async create(@Body(new ZodPipe(createEventSchema)) body: CreateEventDto) {
    const slug = body.title.toLowerCase().replace(/ /g, '-');

    return this.eventsService.create({ ...body, slug });
  }

  @Get()
  async findAll() {
    return this.eventsService.findAll();
  }
}
