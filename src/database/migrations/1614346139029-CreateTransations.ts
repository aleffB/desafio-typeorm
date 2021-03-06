import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTransations1614346139029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
              name: 'transations',
              columns:[
                {
                   name: 'id',
                   type: 'uuid',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                   default: 'uuid_generate_v4()',

                },
                {
                  name: 'title',
                  type: 'varchar',
                },
                {
                  name: 'value',
                  type: 'decimal',
                  precision: 10,
                  scale:2
                },
                {
                  name: 'type',
                  type: 'varchar'
                },
                {
                  name: 'category_id',
                  type: 'uuid',
                  isNullable: true,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
              },
              {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
              },
              ]
        })
      );

    }



    public async down(queryRunner: QueryRunner): Promise<void> {
         //   await queryRunner.dropForeignKey('transations', 'CategoryTransation');

            await queryRunner.dropTable('transations');


    }

}
