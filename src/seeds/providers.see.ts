import { Connection } from 'typeorm';
import { Provider } from '../shared/entity/provider.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import faker = require('faker');

export default class CreateProviders implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        let providers = <Provider[]>[];
        for (let index = 0; index < 10; index++) {
            let provider = new Provider(faker.company.companyName());
            providers.push(provider);
        }

        await connection
            .createQueryBuilder()
            .insert()
            .into(Provider)
            .values(providers)
            .execute();
    }
}
