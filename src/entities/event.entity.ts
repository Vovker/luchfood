import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EventTypeEntity} from "@/entities/eventType.entity";

@Entity()
export class EventEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  description: string;

  @Column()
  img: string;

  @Column({nullable: false})
  date: Date;

  @ManyToOne(() => EventTypeEntity, eventType => eventType.id)
  @JoinColumn()
  type: EventTypeEntity;
}

