import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {EventController} from "@/controllers/event.controller";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class EventRoute implements Routes{
  public path = "/event";
  public router = Router();
  public eventController = new EventController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:amount/:pageId`,
      this.eventController.getEvents
    );

    this.router.get(
      `${this.path}/:id`,
      this.eventController.getEventById
    )

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.eventController.createEvent
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.eventController.updateEvent
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.eventController.deleteEvent
    );
  }
}
