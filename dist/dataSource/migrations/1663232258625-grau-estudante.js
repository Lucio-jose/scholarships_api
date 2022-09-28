"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grauEstudante1663232258625 = void 0;

var _typeorm = require("typeorm");

class grauEstudante1663232258625 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'grau_estudante',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'grauId',
        type: 'varchar(40)',
        isNullable: false
      }, {
        name: 'estudanteId',
        type: 'varchar(40)',
        isUnique: true,
        isNullable: false
      }, {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }]
    })), await queryRunner.createForeignKey('grau_estudante', new _typeorm.TableForeignKey({
      columnNames: ['grauId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'grau',
      name: 'fk_grau_estudante_',
      onUpdate: 'CASCADE'
    }));
    await queryRunner.createForeignKey('grau_estudante', new _typeorm.TableForeignKey({
      columnNames: ['estudanteId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuario',
      name: 'fk_estudante_grau_',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('grau_estudante', 'fk_estudante_grau_');
    await queryRunner.dropForeignKey('grau_estudante', 'fk_grau_estudante_');
    await queryRunner.dropTable('grau_estudante');
  }

}

exports.grauEstudante1663232258625 = grauEstudante1663232258625;