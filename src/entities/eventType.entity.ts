import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EventEntity} from "@/entities/event.entity";

@Entity()
export class EventTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @OneToMany(() => EventEntity, event => event.type)
  event: EventEntity;
}
