import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MenuEntity} from "@/entities/menu.entity";
import {CornerEntity} from "@/entities/corner.entity";

@Entity()
export class MenuCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @OneToMany(() => MenuEntity, menu => menu.id)
  menu: MenuEntity;

  @ManyToOne(() => CornerEntity, corner => corner.id)
  @JoinColumn()
  corner: CornerEntity;
}
