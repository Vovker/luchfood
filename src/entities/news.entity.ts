import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class NewsEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    shortcut: string;

    @Column({nullable: false})
    img: string;

    @Column({nullable: false})
    @CreateDateColumn()
    created_at: Date;

    @Column({nullable: false})
    @UpdateDateColumn()
    updated_at: Date;

}
