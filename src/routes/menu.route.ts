import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {MenuController} from "@/controllers/menu.controller";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class MenuRoute implements Routes {
  public path = '/menu';
  public router = Router();
  public menuController = new MenuController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:categoryId`,
      this.menuController.getMenusByCategory
    );

    this.router.get(
      `${this.path}/corner/:cornerId`,
      this.menuController.getMenuByCorner
    );

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.menuController.createMenu
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.menuController.updateMenu
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.menuController.deleteMenu
    );
  }
}
