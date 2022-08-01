import {CornerService} from "@/services/corner.service";
import {NextFunction, Request, Response} from "express";
import CornerDto from "@/dtos/corner/corner.dto";

export class CornerController {
  private cornerService: CornerService = new CornerService();

  public getCorners = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.cornerService.getCorners();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createCorner = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CornerDto = req.body;
      const result = await this.cornerService.createCorner(data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateCorner = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const data: CornerDto = req.body;
      const result = await this.cornerService.updateCorner(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public getCornerById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.cornerService.getCornerById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteCorner = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const result = await this.cornerService.deleteCorner(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}
