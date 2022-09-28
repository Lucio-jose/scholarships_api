import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class usuario1660752413626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuario',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar(40)',
                        isPrimary: true,
                    },
                    {
                        name: 'nome',
                        type: 'varchar(150)',
                        isNullable: false
                    },
                    {
                        name: 'sobreNome',
                        type: 'varchar(50)',
                        isNullable: false
                    },
                    {
                        name: 'dataNascimento',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'tipoUsuarioId',
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
          'usuario',
          new TableForeignKey({
            columnNames: ['tipoUsuarioId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tipo_usuario',
            name: 'fk_tipo_usuario_',
            onUpdate: 'CASCADE',
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('usuario', 'fk_tipo_usuario_');
        await queryRunner.dropTable('usuario');
    }

}
