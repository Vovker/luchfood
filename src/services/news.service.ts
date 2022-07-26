import {NewsEntity} from "@/entities/news.entity";
import {MoreThan} from "typeorm";
import CreateNewsDto from "@/dtos/news/CreateNews.dto";
import {base64Save} from "@utils/base64Save";


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

  public async createNews(data: CreateNewsDto): Promise<NewsEntity> {
    const news = new NewsEntity();
    news.title = data.title;
    news.description = data.description;
    news.body = data.body;
    news.img = base64Save(data.img);
    return await news.save();
  }

  public async getNewsById(id: string): Promise<NewsEntity> {
    return await NewsEntity.findOne({
      select: ['id', 'title', 'description', 'img', 'created_at'],
      where: {
        id: Number(id)
      }
    });
  }

  public async updateNews(id: string, data: CreateNewsDto): Promise<NewsEntity> {
    const news = await NewsEntity.findOne({
      where: {
        id: Number(id)
      }
    });
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
    return await news.remove();
  }
}

export default NewsService;
