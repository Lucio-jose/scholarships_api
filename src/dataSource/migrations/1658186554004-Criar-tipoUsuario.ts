import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarTipoUsuario1658186554004 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'tipo_usuario',
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
        await queryRunner.dropTable('tipo_usuario')
    }

}
