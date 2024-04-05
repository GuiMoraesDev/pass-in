import { Module } from '@nestjs/common';

import { EventsController } from './controller/events.controller';
import { EventsService } from './provider/events.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
