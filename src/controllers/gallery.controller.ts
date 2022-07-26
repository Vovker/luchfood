import {NextFunction, Response, Request} from "express";
import GalleryService from "@/services/gallery.service";
import GalleryDto from "@/dtos/gallery/gallery.dto";

export class GalleryController {
  private galleryService: GalleryService = new GalleryService();

  public getGallery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const amount = req.query.amount as string;
      const lastId = req.query.lastId as string;
      const result = await this.galleryService.getGallery(amount, lastId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public createGallery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data:GalleryDto = req.body;
      const result = await this.galleryService.createGallery(data);
      res.status(201).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public getGalleryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.galleryService.getGalleryById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateGallery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data:GalleryDto = req.body;
      const result = await this.galleryService.updateGallery(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteGallery = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.galleryService.deleteGallery(id);
      res.status(200).json({data: result});
    } catch (error) {
      next(error);
    }
  }
}
