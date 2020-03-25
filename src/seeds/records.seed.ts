import { Connection } from 'typeorm';
import { Record } from '../shared/entity/record.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreatePatients implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let records = <Record[]>[];
        for (let index = 0; index < 200; index++) {
            records.push(
                new Record(
                    faker.random.number(99) + 1,
                    faker.random.number(9) + 1,
                    faker.random.number(25),
                    faker.random.number(2),
                    faker.random.number(1),
                    faker.lorem.text(),
                    this.getDate(),
                    faker.random.number(24) +1
                )
            );
        }
        
        await connection
            .createQueryBuilder()
            .insert()
            .into(Record)
            .values(records)
            .execute();
    }

    public getDate(): string {
        const now = Date.now() + (Math.random() < 0.5 ? -1 : 1) * faker.random.number(9) * 1e8;
        return new Date(now).toISOString().slice(0, -5);
    }
}
