import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CornerEntity} from "@/entities/corner.entity";

@Entity()
export class KitchenTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @OneToMany(() => CornerEntity, corner => corner.id)
  corner: CornerEntity;
}
