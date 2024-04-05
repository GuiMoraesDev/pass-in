import { Injectable } from '@nestjs/common';

import { type Cat } from '../../../dto/types';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
