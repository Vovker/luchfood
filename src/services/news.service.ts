import {NewsEntity} from "@/entities/news.entity";
import NewsDto from "@/dtos/news/news.dto";
import {base64Save} from "@utils/base64Save";
import {HttpException} from "@exceptions/HttpException";


class NewsService {
  public async getNews(amount: number, pageId: number ): Promise<NewsEntity[]> {

    if(!amount) {
      throw new HttpException(400, 'Bad request');
    }

    return await NewsEntity.find({
      select: ['id', 'title', 'description', 'img', 'created_at'],
      take: amount,
      skip: pageId * amount,
      order: {
        created_at: 'DESC'
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
      select: ['id', 'title', 'description', 'img', 'body', 'created_at'],
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

    if(data.img)
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
