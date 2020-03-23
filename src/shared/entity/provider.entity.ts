import { Column, Entity, OneToMany } from 'typeorm';

@Entity('providers', { schema: 'nestjs' })
export class Provider {
    constructor(title: string) {
        this.name = title;
    }

    @Column('int', { primary: true, name: 'id' })
    public id: number;

    @Column('varchar', { name: 'name' })
    public name!: string;
}
