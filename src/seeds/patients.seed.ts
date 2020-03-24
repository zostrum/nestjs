import { Connection } from 'typeorm';
import { Patient } from '../shared/entity/patient.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreatePatients implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let customers = <Patient[]>[];
        for (let index = 0; index < 100; index++) {
            customers.push(
                new Patient(
                    faker.name.firstName(),
                    faker.name.lastName(),
                    faker.image.avatar(),
                    faker.phone.phoneNumber(),
                    faker.address.streetAddress() + ', ' + faker.address.secondaryAddress(),
                    faker.random.number(1)
                        ? faker.address.streetAddress() + ', ' + faker.address.secondaryAddress()
                        : '',
                    faker.address.city(),
                    faker.random.number(10),
                    faker.address.zipCode(),
                    faker.random.number(1)
                )
            );
        }

        await connection
            .createQueryBuilder()
            .insert()
            .into(Patient)
            .values(customers)
            .execute();
    }
}
