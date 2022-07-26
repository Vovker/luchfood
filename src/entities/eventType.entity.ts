import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {EventEntity} from "@/entities/event.entity";

@Entity()
export class EventTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @OneToOne(() => EventEntity, event => event.type)
  event: EventEntity;
}
