import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ engine: 'InnoDB', database: 'UsersDb', name: 'stories', synchronize: true })
export class Story {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    text: string;

    @Column()
    @CreateDateColumn()
    created: Date;

}
