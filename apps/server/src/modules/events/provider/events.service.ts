import { Injectable } from '@nestjs/common';

import { type Event } from '../../../dto/types';

@Injectable()
export class EventsService {
  private readonly events: Event[] = [];

  create(event) {
    this.events.push(event);
  }

  findAll() {
    return this.events;
  }
}
