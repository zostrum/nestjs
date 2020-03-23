import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'procedures' })
export class Procedure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    price: number;
}
