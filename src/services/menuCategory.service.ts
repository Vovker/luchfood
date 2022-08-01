import {MenuCategoryEntity} from "@/entities/menuCategory.entity";
import MenuCategoryDto from "@/dtos/menuCategory/menuCategory.dto";
import {HttpException} from "@exceptions/HttpException";
import {CornerEntity} from "@/entities/corner.entity";
import {MenuEntity} from "@/entities/menu.entity";

export class MenuCategoryService {
  public async getMenuCategoriesById(id: number): Promise<MenuCategoryEntity[]> {

    const corner = await CornerEntity.findOne({
      where: {
        id: id
      }
    });

    if(!corner) {
      throw new HttpException(404, 'Corner not found');
    }

    return await MenuCategoryEntity.createQueryBuilder('menuCategory')
      .where('menuCategory.cornerId = :id', {id: id})
      .getMany();
  }

  public async createMenuCategory(data: MenuCategoryDto): Promise<MenuCategoryEntity> {

    const corner = await CornerEntity.findOne({
      where: {
        id: data.cornerId
      }
    });

    if(!corner) {
      throw new HttpException(404, 'Corner not found');
    }

    const menuCategory = new MenuCategoryEntity();
    menuCategory.name = data.name;
    menuCategory.corner = corner;
    return await menuCategory.save();
  }

  public async updateMenuCategory(id: number, data: MenuCategoryDto): Promise<MenuCategoryEntity> {
    const menuCategory = await MenuCategoryEntity.findOne({
      where: {
        id: id
      }
    });

    if(!menuCategory) {
      throw new HttpException(404, 'MenuCategory not found');
    }

    menuCategory.name = data.name;
    return await menuCategory.save();
  }

  public async deleteMenuCategory(id: number): Promise<MenuCategoryEntity> {
    const menuCategory = await MenuCategoryEntity.findOne({
      where: {
        id: id
      }
    });

    if(!menuCategory) {
      throw new HttpException(404, 'MenuCategory not found');
    }

    const menuData = await MenuEntity.createQueryBuilder('menu')
      .where('menu.menuCategoryId = :id', {id: id})
      .getMany();

    if(menuData.length > 0) {
      menuData.forEach(async (menu) => {
        await menu.remove();
      });
    }

    return await menuCategory.remove();
  }
}
