import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTravelsTable1607809993811 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:'travels',
            columns:[
            {
                name:'id',
                type:'uuid',
                isPrimary:true,
                default:'uuid_generate_v4()',
            },
            {
                name:'id_bus',
                type:'int',
            },
            {
                name:'id_passengers',
                type:'int',
            },
        ],    
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
