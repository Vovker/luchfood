import {Router} from "express";
import {MenuCategoryController} from "@/controllers/menuCategory.controller";
import {Routes} from "@interfaces/routes.interface";

export class MenuCategoryRoute implements Routes {
  public path = '/menu-category';
  public router = Router();
  public menuCategoryController = new MenuCategoryController();

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
      this.menuCategoryController.createMenuCategory
    );

    this.router.put(
      `${this.path}/:id`,
      this.menuCategoryController.updateMenuCategory
    );

    this.router.delete(
      `${this.path}/:id`,
      this.menuCategoryController.deleteMenuCategory
    );
  }
}
