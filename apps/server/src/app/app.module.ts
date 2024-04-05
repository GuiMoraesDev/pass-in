import { Module } from '@nestjs/common';

import { CatsModule } from '../modules/cats/cats.module';
import { EventsModule } from '../modules/events/events.module';

@Module({
  imports: [CatsModule, EventsModule],
})
export class AppModule {}
