import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProceduresTable1584959890580 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'procedures',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'cost',
                        type: 'decimal',
                        precision: 5,
                        scale: 2
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('procedures');
    }
}
