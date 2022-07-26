import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {GalleryController} from "@/controllers/gallery.controller";

export class GalleryRoute implements Routes{
  public path = '/gallery';
  public router = Router();
  public galleryController = new GalleryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}`,
      this.galleryController.getGallery
    );

    this.router.post(
      `${this.path}`,
      this.galleryController.createGallery
    );

    this.router.put(
      `${this.path}/:id`,
      this.galleryController.updateGallery
    );

    this.router.delete(
      `${this.path}/:id`,
      this.galleryController.deleteGallery
    );

    this.router.get(
      `${this.path}/:id`,
      this.galleryController.getGalleryById
    );

  }
}
