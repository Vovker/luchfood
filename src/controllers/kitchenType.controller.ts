import {NextFunction, Request, Response} from "express";
import KitchenTypeDto from "@/dtos/kitchenType/kitchenType.dto";
import KitchenTypeService from "@/services/kitchenType.service";


export class KitchenTypeController {
  private service: KitchenTypeService = new KitchenTypeService();

  public getKitchenTypes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.service.getKitchenTypes();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createKitchenType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: KitchenTypeDto = req.body;
      const result = await this.service.createKitchenType(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateKitchenType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: KitchenTypeDto = req.body;
      const result = await this.service.updateKitchenType(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteKitchenType = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.service.deleteKitchenType(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
