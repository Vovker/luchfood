import {EventEntity} from "@/entities/event.entity";
import {MoreThan} from "typeorm";
import EventDto from "@/dtos/event/event.dto";
import {HttpException} from "@exceptions/HttpException";
import {base64Save} from "@utils/base64Save";

export class EventService {
  public async getEvents(amount: number, lastId: number): Promise<EventEntity[]> {

    if(!amount) {
      throw new HttpException(400, 'Bad request');
    }

    if(!lastId) {
      lastId = 0;
    }

     return await EventEntity.find({
       select: ['id', 'name', 'img', 'date'],
       take: amount,
       where: {
         id: MoreThan(lastId)
       }
     });
  }

  public async createEvent(data: EventDto): Promise<EventEntity> {
    const event = new EventEntity();
    event.name = data.name;
    event.description = data.description;
    event.img = base64Save(data.img);
    event.date = data.date;
    return await event.save();
  }

  public async getEventById(id: number): Promise<EventEntity> {
    const event = await EventEntity.findOne({
      select: ['id', 'name', 'description', 'img', 'date'],
      where: {
        id: id
      }
    });

    if(!event) {
      throw new HttpException(404, 'Event not found');
    }

    return event;
  }

  public async updateEvent(id: number, data: EventDto): Promise<EventEntity> {
    const event = await EventEntity.findOne({
      where: {
        id: id
      }
    });

    if(!event) {
      throw new HttpException(404, 'Event not found');
    }

    event.name = data.name;
    event.description = data.description;
    event.img = base64Save(data.img);
    event.date = data.date;

    return await event.save();
  }

  public async deleteEvent(id: number): Promise<EventEntity> {
    const event = await EventEntity.findOne({
      where: {
        id: id
      }
    });

    if(!event) {
      throw new HttpException(404, 'Event not found');
    }

    return await event.remove();
  }
}
