import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
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

  @OneToOne(() => EventTypeEntity, eventType => eventType.id)
  @JoinColumn()
  type: EventTypeEntity;
}

