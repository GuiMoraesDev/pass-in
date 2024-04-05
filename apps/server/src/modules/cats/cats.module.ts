import { Module } from '@nestjs/common';

import { CatsController } from './controller/cats.controller';
import { CatsService } from './provider/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
