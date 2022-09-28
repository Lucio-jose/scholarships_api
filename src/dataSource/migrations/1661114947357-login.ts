import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class login1661114947357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {~
        await queryRunner.createTable(
            new Table({
                name: 'login',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar(40)',
                        isPrimary: true,
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'usuarioId',
                        type: 'varchar(40)',
                        isNullable: false
                    },
                    {
                        name: 'contactoId',
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
        );

        await queryRunner.createForeignKey(
          'login',
          new TableForeignKey({
            columnNames: ['contactoId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'contacto',
            name: 'fk_login_contacto_',
            onUpdate: 'CASCADE',
          })
        );

        await queryRunner.createForeignKey(
          'login',
          new TableForeignKey({
            columnNames: ['usuarioId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuario',
            name: 'fk_login_usuario_',
            onUpdate: 'CASCADE',
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('login', 'fk_login_usuario_');
        await queryRunner.dropForeignKey('login', 'fk_login_contacto_');
        await queryRunner.dropTable('login');
    }

}
