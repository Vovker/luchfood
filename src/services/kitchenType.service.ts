import {KitchenTypeEntity} from "@/entities/kitchenType.entity";
import KitchenTypeDto from "@/dtos/kitchenType/kitchenType.dto";
import {HttpException} from "@exceptions/HttpException";

class KitchenTypeService {
  public async getKitchenTypes(): Promise<KitchenTypeEntity[]> {
    return await KitchenTypeEntity.find();
  }

  public async createKitchenType(data: KitchenTypeDto): Promise<KitchenTypeEntity> {
    const kitchenType = new KitchenTypeEntity();
    kitchenType.name = data.name;
    return await kitchenType.save();
  }

  public async updateKitchenType(id: number, data: KitchenTypeDto): Promise<KitchenTypeEntity> {
    const kitchenType = await KitchenTypeEntity.findOne({
      where: {
        id: id
      }
    });

    if(!kitchenType) {
      throw new HttpException(404, 'KitchenType not found');
    }

    kitchenType.name = data.name;
    return await kitchenType.save();
  }

  public async deleteKitchenType(id: number): Promise<KitchenTypeEntity> {
    const kitchenType = await KitchenTypeEntity.findOne({
      where: {
        id: id
      }
    });

    if(!kitchenType) {
      throw new HttpException(404, 'KitchenType not found');
    }

    return await kitchenType.remove();
  }
}

export default KitchenTypeService;
