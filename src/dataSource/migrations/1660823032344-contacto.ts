import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class contacto1660823032344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'contacto',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar(40)',
                        isPrimary: true,
                    },
                    {
                        name: 'contacto',
                        type: 'varchar(60)',
                        isNullable: false
                    },
                    {
                        name: 'tipoContactoId',
                        type: 'varchar(40)',
                        isNullable: false
                    },
                    {
                        name: 'usuarioId',
                        type: 'varchar(40)',
                        isNullable: false
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
                ]
            })
        ),

        await queryRunner.createForeignKey(
          'contacto',
          new TableForeignKey({
            columnNames: ['tipoContactoId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipo_contacto',
            name: 'fk_tipo_contacto_',
            onUpdate: 'CASCADE',
          })
        );

        await queryRunner.createForeignKey(
          'contacto',
          new TableForeignKey({
            columnNames: ['usuarioId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuario',
            name: 'fk_contacto_usuario_',
            onUpdate: 'CASCADE',
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('contacto', 'fk_contacto_usuario_');
        await queryRunner.dropForeignKey('contacto', 'fk_tipo_contacto_');
        await queryRunner.dropTable('contacto');
    }

}
