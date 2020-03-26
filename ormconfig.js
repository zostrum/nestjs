module.exports = {
    type: 'mssql',
    // type: 'mysql',
    // port: 3306,
    // username: 'root',
    // password: 'root',
    host: 'localhost',
    port: 1433,
    username: 'SA',
    password: 'Adm_passwd1!',
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
    factories: ['src/factories/**/*.factory.ts'],
    logging: 'all'
};
