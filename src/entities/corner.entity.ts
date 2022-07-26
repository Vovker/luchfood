import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {KitchenTypeEntity} from "@/entities/kitchenType.entity";

@Entity()
export class CornerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  slogan: string;

  @Column({nullable: false})
  description: string;

  @Column({nullable: false})
  logo: string;

  @Column({nullable: false})
  address: string;

  @Column({nullable: true})
  instagram: string;

  @OneToOne(() => KitchenTypeEntity, kitchenType => kitchenType.corner)
  @JoinColumn()
  kitchenType: KitchenTypeEntity;

}
