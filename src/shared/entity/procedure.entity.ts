import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'procedures' })
export class Procedure {
    constructor(title: string, code: string, price: number) {
        this.title = title;
        this.code = code;
        this.price = price;
    }

    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    public id: number;

    @Column('varchar', { name: 'title', length: 255 })
    public title!: string;

    @Column('varchar', { name: 'code', length: 255 })
    public code!: string;

    @Column('decimal', { name: 'price', precision: 7, scale: 2 })
    public price!: number;
}
