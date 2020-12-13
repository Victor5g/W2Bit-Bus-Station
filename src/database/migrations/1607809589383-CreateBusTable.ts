import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBusTable1607809589383 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:'bus',
            columns:[
            {
                name:'id',
                type:'uuid',
                isPrimary:true,
                default:'uuid_generate_v4()',
            },
            {
                name:'id_user',
                type:'varchar',
            },
            {
                name:'vehicle_plate',
                type:'varchar',
                isUnique:true,
            },
            {
                name:'year',
                type:'int',
            },
            {
                name:'model',
                type:'varchar',
            },
            {
                name:'seat_amount',
                type:'varchar',
            },
        ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bus');
    }

}
