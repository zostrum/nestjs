import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCustomersTable1584961703814 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'customers',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        length: '32'
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        length: '32'
                    },
                    {
                        name: 'photo',
                        type: 'varchar'
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        length: '14'
                    },
                    {
                        name: 'address1',
                        type: 'varchar'
                    },
                    {
                        name: 'address2',
                        type: 'varchar'
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        length: '32'
                    },
                    {
                        name: 'state_id',
                        type: 'int'
                    },
                    {
                        name: 'zip',
                        type: 'int'
                    },
                    {
                        name: 'isGarantor',
                        type: 'tinyint'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('customers');
    }
}
