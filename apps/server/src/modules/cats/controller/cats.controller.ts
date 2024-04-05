import { Controller, Get, Post, Body } from '@nestjs/common';

import { type Cat, type CreateCatDto } from '../../../dto/types';
import { CatsService } from '../provider/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
