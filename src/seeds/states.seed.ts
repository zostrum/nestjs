import { Connection } from 'typeorm';
import { State } from '../shared/entity/state.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreateStates implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let states = <State[]>[];
        for (let index = 0; index < 10; index++) {
            let state = new State(faker.address.state());
            states.push(state);
        }

        await connection
            .createQueryBuilder()
            .insert()
            .into(State)
            .values(states)
            .execute();
    }
}
