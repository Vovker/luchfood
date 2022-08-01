import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MenuCategoryEntity} from "@/entities/menuCategory.entity";

@Entity()
export class MenuEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  price: number;

  @ManyToOne(() => MenuCategoryEntity, menuCategory => menuCategory.id)
  @JoinColumn()
  menuCategory: MenuCategoryEntity;
}
