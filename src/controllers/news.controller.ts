import {Request, Response, NextFunction} from "express";

export class NewsController {

  public createNews = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      res.status(200).json({ message: "Create news" });
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
      res.status(200).json({ message: "Get news" });
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

    } catch (error) {
      next(error);
    }
  }

}
