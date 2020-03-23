import { Connection } from 'typeorm';
import { Customer } from '../shared/entity/custom.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreateCustomers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let customers = <Customer[]>[];
        for (let index = 0; index < 100; index++) {
            customers.push(
                new Customer(
                    faker.name.firstName(),
                    faker.name.lastName(),
                    faker.image.avatar(),
                    faker.phone.phoneNumber(),
                    faker.address.streetAddress() + ', ' + faker.address.secondaryAddress(),
                    faker.random.number(1)
                        ? faker.address.streetAddress() + ', ' + faker.address.secondaryAddress()
                        : '',
                    faker.address.city(),
                    faker.random.number(25),
                    faker.address.zipCode(),
                    faker.random.number(1)
                )
            );

            /* firstName: string,
        lastName: string,
        photo: string,
        phone: string,
        address1: string,
        address2: string,
        city: string,
        stateId: number,

        zip: number,
        isGarantor: number */
        }

        await connection
            .createQueryBuilder()
            .insert()
            .into(Customer)
            .values(customers)
            .execute();
    }
}
