import { Test, type TestingModule } from '@nestjs/testing';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let cats: TestingModule;

  beforeAll(async () => {
    cats = await Test.createTestingModule({
      imports: [],
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();
  });

  describe('findAll', () => {
    it('should return "Hello API"', () => {
      const catsController = cats.get<CatsController>(CatsController);
      expect(catsController.findAll()).toEqual({ message: 'Hello API' });
    });
  });
});
