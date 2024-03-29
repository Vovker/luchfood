import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {NewsController} from "@/controllers/news.controller";
import {AuthMiddleware} from "@/middlewares/auth.middleware";

export class NewsRoute implements Routes {
  public path = '/news';
  public router = Router();
  public newsController = new NewsController();
  public authMiddleware: AuthMiddleware = new AuthMiddleware();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}/:amount/:pageId`,
      this.newsController.getNews
    );

    this.router.post(
      `${this.path}`,
      this.authMiddleware.authenticateJWT,
      this.newsController.createNews
    );

    this.router.put(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.newsController.updateNews
    );

    this.router.delete(
      `${this.path}/:id`,
      this.authMiddleware.authenticateJWT,
      this.newsController.deleteNews
    );

    this.router.get(
      `${this.path}/:id`,
      this.newsController.getNewsById
    );

  }
}
