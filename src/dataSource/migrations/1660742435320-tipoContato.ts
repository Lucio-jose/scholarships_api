import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class tipoContato1660742435320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'tipo_contacto',
            columns: [
              {
                name: 'id',
                type: 'varchar(40)',
                isPrimary: true,
              },
              {
                name: 'designacao',
                type: 'varchar(30)',
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
        await queryRunner.dropTable('tipo_contacto')
    }

}
