import {Routes} from "@interfaces/routes.interface";
import {KitchenTypeController} from "@/controllers/kitchenType.controller";
import {Router} from "express";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class KitchenTypeRoute implements Routes {
  public path = '/kitchen-type';
  public router = Router();
  public kitchenTypeController = new KitchenTypeController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

      this.router.get(
        `${this.path}`,
        this.kitchenTypeController.getKitchenTypes
      );

      this.router.post(
        `${this.path}`,
        this.authMiddleware.authenticateJWT,
        this.kitchenTypeController.createKitchenType
      );

      this.router.put(
        `${this.path}/:id`,
        this.authMiddleware.authenticateJWT,
        this.kitchenTypeController.updateKitchenType
      );

      this.router.delete(
        `${this.path}/:id`,
        this.authMiddleware.authenticateJWT,
        this.kitchenTypeController.deleteKitchenType
      );
  }
}
