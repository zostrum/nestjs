module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nestjs',
    entities: ['dist/shared/entity/**/*.entity{.ts,.js}'],
    synchronize: false,
    options: {
        enableArithAbort: true
    },

    migrationsTableName: 'migrations',
    migrations: ['dist/migration/*.js'],
    cli: {
        migrationsDir: 'src/migration'
    },
    seeds: ['dist/seeds/**/*.seed.js'],
    factories: ['src/factories/**/*.factory.ts']
};
