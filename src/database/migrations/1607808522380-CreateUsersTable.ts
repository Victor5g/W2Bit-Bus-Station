import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1607808522380 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        //Criando Extensão da função "generate_v4()" caso não esteja abilitada
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable( new Table({
            name:'users',
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
                name:'image',
                type:'varchar',
            },
            {
                name:'state',
                type:'varchar',
            },
            {
                name:'city',
                type:'varchar',
            },
            {
                name:'password',
                type:'varchar',
                isUnique:true,
            }
        ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');

    }

}
