import {GalleryEntity} from "@/entities/gallery.entity";
import {MoreThan} from "typeorm";
import {base64Save} from "@utils/base64Save";
import GalleryDto from "@/dtos/gallery/gallery.dto";
import {HttpException} from "@exceptions/HttpException";

class GalleryService {
  public async getGallery(amount: number, lastId: number): Promise<GalleryEntity[]> {

    if(!amount) {
      throw new HttpException(400, 'Bad request');
    }

    return await GalleryEntity.find({
      select: ['id', 'img', 'created_at'],
      take: amount,
      where: {
        id: MoreThan(lastId)
      }
    });
  }

  public async createGallery(data: GalleryDto): Promise<GalleryEntity> {
    const gallery = new GalleryEntity();
    gallery.img = base64Save(data.img);
    return await gallery.save();
  }

  public async getGalleryById(id: string): Promise<GalleryEntity> {
    const gallery = await GalleryEntity.findOne({
      select: ['id', 'img', 'created_at'],
      where: {
        id: Number(id)
      }
    });

    if(!gallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    return gallery;
  }

  public async updateGallery(id: number, data: GalleryDto): Promise<GalleryEntity> {
    const gallery = await GalleryEntity.findOne({
      where: {
        id: id
      }
    });

    if(!gallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    gallery.img = base64Save(data.img);

    return await gallery.save();
  }

  public async deleteGallery(id: string): Promise<GalleryEntity> {
    const gallery = await GalleryEntity.findOne({
      where: {
        id: Number(id)
      }
    });

    if(!gallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    return await gallery.remove();
  }
}

export default GalleryService;
