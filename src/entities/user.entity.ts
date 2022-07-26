import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  username: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: false})
  token: string;

  @Column({nullable: false})
  refresh_token: string;
}
