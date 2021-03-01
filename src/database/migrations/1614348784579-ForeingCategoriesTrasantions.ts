import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ForeingCategoriesTrasantions1614348784579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.createForeignKey('transations', new TableForeignKey({
        name: 'CategoryTransation',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('transations', 'CategoryTransation');
    }

}
