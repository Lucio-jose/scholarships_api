import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class grauEstudante1663232258625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'grau_estudante',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar(40)',
                        isPrimary: true,
                    },
                    {
                        name: 'grauId',
                        type: 'varchar(40)',
                        isNullable: false
                    },
                    {
                        name: 'estudanteId',
                        type: 'varchar(40)',
                        isUnique: true,
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
          'grau_estudante',
          new TableForeignKey({
            columnNames: ['grauId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'grau',
            name: 'fk_grau_estudante_',
            onUpdate: 'CASCADE',
          })
        );

        await queryRunner.createForeignKey(
          'grau_estudante',
          new TableForeignKey({
            columnNames: ['estudanteId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'usuario',
            name: 'fk_estudante_grau_',
            onUpdate: 'CASCADE',
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('grau_estudante', 'fk_estudante_grau_');
        await queryRunner.dropForeignKey('grau_estudante', 'fk_grau_estudante_');
        await queryRunner.dropTable('grau_estudante');
    }

}
