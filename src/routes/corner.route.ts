import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {CornerController} from "@/controllers/corner.controller";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class CornerRoute implements Routes {
  public path = "/corner";
  public router = Router();
  public cornerController = new CornerController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:id`,
      this.cornerController.getCornerById
    );

    this.router.get(
      `${this.path}`,
      this.cornerController.getCorners
    );

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.cornerController.createCorner
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.cornerController.updateCorner
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.cornerController.deleteCorner
    );
  }
}
