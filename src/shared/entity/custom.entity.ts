import { Column, Entity } from 'typeorm';

@Entity('customers', { schema: 'nestjs' })
export class Customer {
    constructor(
        firstName: string,
        lastName: string,
        photo: string,
        phone: string,
        address1: string,
        address2: string,
        city: string,
        stateId: number,
        zip: string,
        isGarantor: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.phone = phone;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.stateId = stateId;
        this.zip = zip;
        this.isGarantor = isGarantor;
    }

    @Column('int', { primary: true, name: 'id' })
    public id: number;

    @Column('varchar', { name: 'first_name', length: 32 })
    public firstName!: string;

    @Column('varchar', { name: 'last_name', length: 32 })
    public lastName!: string;

    @Column('varchar', { name: 'photo', length: 255 })
    public photo: string;

    @Column('varchar', { name: 'phone', length: 32 })
    public phone: string;

    @Column('varchar', { name: 'address1', length: 255 })
    public address1!: string;

    @Column('varchar', { name: 'address2', length: 255 })
    public address2: string;

    @Column('varchar', { name: 'city', length: 32 })
    public city!: string;

    @Column('int', { name: 'state_id' })
    public stateId!: number;

    @Column('varchar', { name: 'zip', length: 16 })
    public zip!: string;

    @Column('tinyint', { name: 'isGarantor' })
    public isGarantor!: number;
}
