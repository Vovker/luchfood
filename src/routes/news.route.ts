import {Routes} from "@interfaces/routes.interface";
import {Router} from "express";
import {NewsController} from "@/controllers/news.controller";

export class NewsRoute implements Routes {
  public path = '/news';
  public router = Router();
  public newsController = new NewsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {

    this.router.get(
      `${this.path}`,
      this.newsController.getNews
    );

    this.router.post(
      `${this.path}`,
      this.newsController.createNews
    );

    this.router.put(
      `${this.path}/:id`,
      this.newsController.updateNews
    );

    this.router.delete(
      `${this.path}/:id`,
      this.newsController.deleteNews
    );

    this.router.get(
      `${this.path}/:id`,
      this.newsController.getNewsById
    );

  }
}
