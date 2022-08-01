import {MenuCategoryService} from "@/services/menuCategory.service";
import {NextFunction, Request, Response} from "express";
import MenuCategoryDto from "@/dtos/menuCategory/menuCategory.dto";

export class MenuCategoryController {
  private menuCategoryService: MenuCategoryService = new MenuCategoryService();

  public getMenuCategoriesById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.menuCategoryService.getMenuCategoriesById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createMenuCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: MenuCategoryDto = req.body;
      const result = await this.menuCategoryService.createMenuCategory(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateMenuCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: MenuCategoryDto = req.body;
      const result = await this.menuCategoryService.updateMenuCategory(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteMenuCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.menuCategoryService.deleteMenuCategory(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
