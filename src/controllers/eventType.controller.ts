import EventTypeService from "@/services/eventType.service";
import {NextFunction, Response, Request} from "express";
import EventTypeDto from "@/dtos/eventType/eventType.dto";


export class EventTypeController {
  private service: EventTypeService = new EventTypeService();

  public getEventTypes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.service.getEventTypes();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createEventType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: EventTypeDto = req.body;
      const result = await this.service.createEventType(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateEventType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: EventTypeDto = req.body;
      const result = await this.service.updateEventType(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteEventType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteEventType(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
