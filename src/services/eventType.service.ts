import {EventTypeEntity} from "@/entities/eventType.entity";
import {HttpException} from "@exceptions/HttpException";
import EventTypeDto from "@/dtos/eventType/eventType.dto";

class EventTypeService {
  public async getEventTypes(): Promise<EventTypeEntity[]> {
    return await EventTypeEntity.find();
  }

  public async createEventType(data: EventTypeDto): Promise<EventTypeEntity> {

    const eventType = new EventTypeEntity();
    eventType.name = data.name;
    return await eventType.save();
  }

  public async updateEventType(id: number, data: EventTypeDto): Promise<EventTypeEntity> {
    const eventType = await EventTypeEntity.findOne({
      where: {
        id: id
      }
    });

    if(!eventType) {
      throw new HttpException(404, 'EventType not found');
    }

    eventType.name = data.name;
    return await eventType.save();
  }

  public async deleteEventType(id: number): Promise<EventTypeEntity> {
    const eventType = await EventTypeEntity.findOne({
      where: {
        id: id
      }
    });

    if(!eventType) {
      throw new HttpException(404, 'EventType not found');
    }

    return await eventType.remove();
  }
}

export default EventTypeService;
