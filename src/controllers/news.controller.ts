import {Request, Response, NextFunction} from "express";
import NewsService from "../services/news.service";
import CreateNewsDto from "@/dtos/news/CreateNews.dto";

export class NewsController {

  private service: NewsService = new NewsService();

  public createNews = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data: CreateNewsDto = req.body;
      const result = await this.service.createNews(data);
      res.status(200).json({data: result});
    } catch (error) {
      next(error);
    }
  }

  public getNews = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const amount = req.query.amount as string;
      const lastId = req.query.lastId as string;
      const result = await this.service.getNews(amount, lastId);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public getNewsById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id as string;
      const result = await this.service.getNewsById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public updateNews = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data: CreateNewsDto = req.body;
      const result = await this.service.updateNews(id, data);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  public deleteNews = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const id = req.params.id as string;
      const result = await this.service.deleteNews(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

}
