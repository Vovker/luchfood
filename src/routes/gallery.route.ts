import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {GalleryController} from "@/controllers/gallery.controller";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class GalleryRoute implements Routes{
  public path = '/gallery';
  public router = Router();
  public galleryController = new GalleryController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:amount/:pageId`,
      this.galleryController.getGallery
    );

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.galleryController.createGallery
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.galleryController.updateGallery
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.galleryController.deleteGallery
    );

    this.router.get(
      `${this.path}/:id`,
      this.galleryController.getGalleryById
    );

  }
}
