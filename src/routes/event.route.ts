import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {EventController} from "@/controllers/event.controller";

export class EventRoute implements Routes{
  public path = "/event";
  public router = Router();
  public eventController = new EventController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:amount/:lastId`,
      this.eventController.getEvents
    );

    this.router.get(
      `${this.path}/:id`,
      this.eventController.getEventById
    )

    this.router.post(
      `${this.path}`,
      this.eventController.createEvent
    );

    this.router.put(
      `${this.path}/:id`,
      this.eventController.updateEvent
    );

    this.router.delete(
      `${this.path}/:id`,
      this.eventController.deleteEvent
    );
  }
}
