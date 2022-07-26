import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {CornerEntity} from "@/entities/corner.entity";

@Entity()
export class KitchenTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @OneToOne(() => CornerEntity, corner => corner.id)
  corner: CornerEntity;
}
