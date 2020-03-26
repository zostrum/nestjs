import { Connection } from 'typeorm';
import { Procedure } from '../shared/entity/procedure.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreateProcedures implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let procedures = <Procedure[]>[];
        for (let index = 0; index < 25; index++) {
            procedures.push(
                new Procedure(
                    faker.hacker.verb() + ' ' + faker.hacker.noun(),
                    faker.hacker.abbreviation(),
                    faker.random.number() / 100
                )
            );
        }

        await connection
            .createQueryBuilder()
            .insert()
            .into(Procedure)
            .values(procedures)
            .execute();
    }
}
