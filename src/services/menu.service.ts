import {MenuEntity} from "@/entities/menu.entity";
import {MenuCategoryEntity} from "@/entities/menuCategory.entity";
import {HttpException} from "@exceptions/HttpException";
import MenuDto from "@/dtos/menu/menu.dto";
import {CornerEntity} from "@/entities/corner.entity";

class MenuService {
  public async getMenusByCategory(id: number): Promise<MenuEntity[]> {
    const menuCategory = await MenuCategoryEntity.findOne({
      where: {
        id: id
      }
    });

    if(!menuCategory) {
      throw new HttpException(404, 'MenuCategory not found');
    }

    return await MenuEntity.createQueryBuilder('menu')
      .where('menu.menuCategoryId = :id', {id: id})
      .getMany();
  }

  public async getMenuByCorner(id: number): Promise<Awaited<{ name: string; id: number; menu: MenuEntity[] }>[]> {
    const corner = await CornerEntity.findOne({
      where: {
        id: id
      }
    });

    if(!corner) {
      throw new HttpException(404, 'Corner not found');
    }

    const categories = await MenuCategoryEntity.createQueryBuilder('menuCategory')
      .where('menuCategory.cornerId = :id', {id: id})
      .getMany();

    return await Promise.all(categories.map(async category => {
      const menu = await MenuEntity.createQueryBuilder('menu')
        .where('menu.menuCategoryId = :id', {id: category.id})
        .getMany();

      return {
        name: category.name,
        id: category.id,
        menu
      };
    }));
  }

  public async createMenu(data: MenuDto): Promise<MenuEntity> {
    const menuCategory = await MenuCategoryEntity.findOne({
      where: {
        id: data.menuCategoryId
      }
    });

    if(!menuCategory) {
      throw new HttpException(404, 'MenuCategory not found');
    }

    const menu = new MenuEntity();
    menu.name = data.name;
    menu.price = data.price;
    menu.weight = data.weight;
    menu.menuCategory = menuCategory;
    return await menu.save();
  }

  public async updateMenu(id: number, data: MenuDto): Promise<MenuEntity> {
    const menu = await MenuEntity.findOne({
      where: {
        id: id
      }
    });

    if(!menu) {
      throw new HttpException(404, 'Menu not found');
    }

    menu.name = data.name;
    menu.weight = data.weight;
    menu.price = data.price;
    return await menu.save();
  }

  public async deleteMenu(id: number): Promise<MenuEntity> {
    const menu = await MenuEntity.findOne({
      where: {
        id: id
      }
    });

    if(!menu) {
      throw new HttpException(404, 'Menu not found');
    }

    return await menu.remove();
  }
}

export default MenuService;
