import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class grau1663070765991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'grau',
            columns: [
              {
                name: 'id',
                type: 'varchar(40)',
                isPrimary: true,
              },
              {
                name: 'designacao',
                type: 'varchar(60)',
                isUnique: true,
              },
              {
                name: 'createdAt',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('grau')
    }

}
