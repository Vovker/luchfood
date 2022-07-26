import {Routes} from "@interfaces/routes.interface";
import {EventTypeController} from "@/controllers/eventType.controller";
import {Router} from "express";

export class EventTypeRoute implements Routes{
  public path = "/event-type";
  public router = Router();
  public eventTypeController = new EventTypeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}`,
      this.eventTypeController.getEventTypes
    );

    this.router.post(
      `${this.path}`,
      this.eventTypeController.createEventType
    );

    this.router.put(
      `${this.path}/:id`,
      this.eventTypeController.updateEventType
    );

    this.router.delete(
      `${this.path}/:id`,
      this.eventTypeController.deleteEventType
    );
  }
}
