import {NextFunction, Request, Response} from "express";
import MenuService from "@/services/menu.service";
import MenuDto from "@/dtos/menu/menu.dto";

export class MenuController {
  private service: MenuService = new MenuService();

  public getMenusByCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const categoryId = Number(req.params.categoryId);
      const result = await this.service.getMenusByCategory(categoryId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public getMenuByCorner = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const cornerId = Number(req.params.cornerId);
      const result = await this.service.getMenuByCorner(cornerId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createMenu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: MenuDto = req.body;
      const result = await this.service.createMenu(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateMenu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: MenuDto = req.body;
      const result = await this.service.updateMenu(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteMenu = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteMenu(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
