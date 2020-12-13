import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePassengersTable1607809813835 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:'passengers',
            columns:[
            {
                name:'id',
                type:'uuid',
                isPrimary:true,
                default:'uuid_generate_v4()',
            },
            {
                name:'name',
                type:'varchar',
            },
            {
                name:'age',
                type:'integer'
            },
            {
                name:'cpf',
                type:'varchar',
                isUnique:true,
            },
        ],
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('passengers');

    }

}
