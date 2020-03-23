import { Column, Entity } from 'typeorm';

@Entity('states', { schema: 'nestjs' })
export class State {
    constructor(title: string) {
        this.title = title;
    }

    @Column('int', { primary: true, name: 'id' })
    public id?: number;

    @Column('varchar', { name: 'title', length: 32 })
    public title!: string;
}
