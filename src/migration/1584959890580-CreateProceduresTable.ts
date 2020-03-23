import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProceduresTable1584959890580 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'procedures',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'price',
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
