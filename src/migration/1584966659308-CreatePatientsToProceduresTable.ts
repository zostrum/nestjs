import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePatientsToProceduresTable1584966659308 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'patients_to_procedures',
                columns: [
                    {
                        name: 'patient_id',
                        type: 'int'
                    },
                    {
                        name: 'provider_id',
                        type: 'int'
                    },
                    {
                        name: 'amount',
                        type: 'int'
                    },
                    {
                        name: 'status',
                        type: 'int'
                    },
                    {
                        name: 'isBilledToEns',
                        type: 'tinyint'
                    },
                    {
                        name: 'notes',
                        type: 'text'
                    },
                    {
                        name: 'date',
                        type: 'datetime'
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
            'patients_to_procedures',
            new TableForeignKey({
                columnNames: ['patient_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'providers',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'patients_to_procedures',
            new TableForeignKey({
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'providers',
                onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey(
            'patients_to_procedures',
            new TableForeignKey({
                columnNames: ['procedure_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'procedures',
                onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('patients_to_procedures');
        // Drop FK
        await queryRunner.dropForeignKey(
            'providers_to_procedures',
            table.foreignKeys.find(fk => fk.columnNames.indexOf('patient_id') !== -1)
        );
        await queryRunner.dropForeignKey(
            'providers_to_procedures',
            table.foreignKeys.find(fk => fk.columnNames.indexOf('provider_id') !== -1)
        );
        await queryRunner.dropForeignKey(
            'providers_to_procedures',
            table.foreignKeys.find(fk => fk.columnNames.indexOf('procedure_id') !== -1)
        );
        // Drop table
        await queryRunner.dropTable('providers_to_procedures');
    }
}
