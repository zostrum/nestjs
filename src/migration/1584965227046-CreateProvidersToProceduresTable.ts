import {MigrationInterface, QueryRunner, Table, TableIndex, TableForeignKey} from "typeorm";

export class CreateProvidersToProceduresTable1584965227046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'providers_to_procedures',
                columns: [
                    {
                        name: 'provider_id',
                        type: 'int'
                    },
                    {
                        name: 'procedure_id',
                        type: 'int'
                    }
                ]
            }),
            true
        );

        await queryRunner.createForeignKey(
            'providers_to_procedures',
            new TableForeignKey({
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'providers',
                onDelete: 'CASCADE'
            })
        );

         await queryRunner.createForeignKey(
             'providers_to_procedures',
             new TableForeignKey({
                 columnNames: ['procedure_id'],
                 referencedColumnNames: ['id'],
                 referencedTableName: 'procedures',
                 onDelete: 'CASCADE'
             })
         );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('providers_to_procedures');
    }

}
