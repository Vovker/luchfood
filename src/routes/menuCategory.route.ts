import {Router} from "express";
import {MenuCategoryController} from "@/controllers/menuCategory.controller";
import {Routes} from "@interfaces/routes.interface";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class MenuCategoryRoute implements Routes {
  public path = '/menu-category';
  public router = Router();
  public menuCategoryController = new MenuCategoryController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:id`,
      this.menuCategoryController.getMenuCategoriesById
    );

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.menuCategoryController.createMenuCategory
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.menuCategoryController.updateMenuCategory
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.menuCategoryController.deleteMenuCategory
    );
  }
}
