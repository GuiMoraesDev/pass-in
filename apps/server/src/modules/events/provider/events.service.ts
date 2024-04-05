import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class EventsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      log: ['query'],
    });
  }

  async create(event: Prisma.EventCreateInput) {
    try {
      await this.prisma.event.create({
        data: {
          ...event,
          date: new Date(event.date),
        },
      });

      return 'Event created';
    } catch (error) {
      throw new Error('Unable to create event');
    }
  }

  findAll() {
    return this.prisma.event.findMany();
  }
}
