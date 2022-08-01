import {CornerEntity} from "@/entities/corner.entity";
import {base64Save} from "@utils/base64Save";
import CornerDto from "@/dtos/corner/corner.dto";
import {KitchenTypeEntity} from "@/entities/kitchenType.entity";
import {HttpException} from "@exceptions/HttpException";

export class CornerService {
  public async getCorners(): Promise<CornerEntity[]> {
    return await CornerEntity.find();
  }

  public async getCornerById(id: number): Promise<CornerEntity> {
    const corner = await CornerEntity.createQueryBuilder('corner')
      .leftJoinAndSelect('corner.kitchenType', 'kitchenType')
      .where('corner.id = :id', {id: id})
      .getOne();

    if(!corner) {
      throw new HttpException(404, 'Corner not found');
    }

    return corner;
  }

  public async createCorner(data: CornerDto): Promise<CornerEntity> {

    const kitchenType = await KitchenTypeEntity.findOneById(data.kitchenTypeId);

    if(!kitchenType) {
      throw new HttpException(404, 'KitchenType not found');
    }

    const corner = new CornerEntity();
    corner.name = data.name;
    corner.description = data.description;
    corner.logo = base64Save(data.logo);
    corner.address = data.address;
    corner.instagram = data.instagram;
    corner.kitchenType = kitchenType;
    return await corner.save();
  }

  public async updateCorner(id: number, data: CornerDto): Promise<CornerEntity> {

      const kitchenType = await KitchenTypeEntity.findOneById(data.kitchenTypeId);

      if(!kitchenType) {
        throw new HttpException(404, 'KitchenType not found');
      }

      const corner = await CornerEntity.findOne({
        where: {
          id: id
        }
      });

      if(!corner) {
        throw new HttpException(404, 'Corner not found');
      }

      corner.name = data.name;
      corner.description = data.description;
      corner.logo = base64Save(data.logo);
      corner.address = data.address;
      corner.instagram = data.instagram;
      corner.kitchenType = kitchenType;
      return await corner.save();
  }

  public async deleteCorner(id: number): Promise<CornerEntity> {
    const corner = await CornerEntity.findOne({
      where: {
        id: id
      }
    });

    if(!corner) {
      throw new HttpException(404, 'Corner not found');
    }

    return await corner.remove();
  }
}
