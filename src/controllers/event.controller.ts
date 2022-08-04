import {EventService} from "@/services/event.service";
import {NextFunction, Request, Response} from "express";
import EventDto from "@/dtos/event/event.dto";

export class EventController {
  private eventService: EventService = new EventService();

  public getEvents = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const amount = Number(req.params.amount);
      const pageId = Number(req.params.pageId);
      const result = await this.eventService.getEvents(amount, pageId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: EventDto = req.body;
      const result = await this.eventService.createEvent(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public getEventById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.eventService.getEventById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: EventDto = req.body;
      const result = await this.eventService.updateEvent(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteEvent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.eventService.deleteEvent(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
