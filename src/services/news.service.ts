import {NewsEntity} from "@/entities/news.entity";
import {MoreThan} from "typeorm";
import NewsDto from "@/dtos/news/news.dto";
import {base64Save} from "@utils/base64Save";
import {HttpException} from "@exceptions/HttpException";


class NewsService {
  public async getNews(amount: string, lastId: string = '0' ): Promise<NewsEntity[]> {
    return await NewsEntity.find({
      select: ['id', 'title', 'description', 'img', 'created_at'],
      take: Number(amount),
      where: {
        id: MoreThan(Number(lastId))
      }
    });
  }

  public async createNews(data: NewsDto): Promise<NewsEntity> {
    const news = new NewsEntity();
    news.title = data.title;
    news.description = data.description;
    news.body = data.body;
    news.img = base64Save(data.img);
    return await news.save();
  }

  public async getNewsById(id: string): Promise<NewsEntity> {

    const news = await NewsEntity.findOne({
      select: ['id', 'title', 'description', 'img', 'created_at'],
      where: {
        id: Number(id)
      }
    });

    if(!news) {
      throw new HttpException(404, 'News not found');
    }

    return news;
  }

  public async updateNews(id: string, data: NewsDto): Promise<NewsEntity> {
    const news = await NewsEntity.findOne({
      where: {
        id: Number(id)
      }
    });

    if(!news) {
      throw new HttpException(404, 'News not found');
    }

    news.title = data.title;
    news.description = data.description;
    news.body = data.body;
    news.img = base64Save(data.img);

    return await news.save();
  }

  public async deleteNews(id: string): Promise<NewsEntity> {
    const news = await NewsEntity.findOne({
      where: {
        id: Number(id)
      }
    });

    if(!news) {
      throw new HttpException(404, 'News not found');
    }

    return await news.remove();
  }
}

export default NewsService;
