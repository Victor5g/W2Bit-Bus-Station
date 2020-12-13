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
                type:'varchar',
            },
            {
                name:'id_passengers',
                type:'varchar',
            },
        ],    
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
