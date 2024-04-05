import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ZodObject } from 'zod';

@Injectable()
export class ZodPipe<T extends ZodObject<any>> implements PipeTransform<T> {
  constructor(private readonly schema: T) {}

  transform(value: T) {
    const data = this.schema.safeParse(value);

    if (data.success === false) {
      throw new BadRequestException('Invalid data', {
        cause: new Error(),
        description: data.error.errors.map((e) => e.message).join(', '),
      });
    }

    return value;
  }
}
