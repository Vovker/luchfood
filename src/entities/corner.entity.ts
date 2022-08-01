import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {KitchenTypeEntity} from "@/entities/kitchenType.entity";
import {MenuEntity} from "@/entities/menu.entity";
import {MenuCategoryEntity} from "@/entities/menuCategory.entity";

@Entity()
export class CornerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  description: string;

  @Column({nullable: false})
  logo: string;

  @Column({nullable: false})
  address: string;

  @Column({nullable: true})
  instagram: string;

  @ManyToOne(() => KitchenTypeEntity, kitchenType => kitchenType.corner)
  @JoinColumn()
  kitchenType: KitchenTypeEntity;

  @OneToMany(() => MenuCategoryEntity, menuCategory => menuCategory.corner)
  menuCategory: MenuEntity;
}
