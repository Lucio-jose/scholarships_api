"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuario1660752413626 = void 0;

var _typeorm = require("typeorm");

class usuario1660752413626 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'usuario',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'nome',
        type: 'varchar(150)',
        isNullable: false
      }, {
        name: 'sobreNome',
        type: 'varchar(50)',
        isNullable: false
      }, {
        name: 'dataNascimento',
        type: 'date',
        isNullable: false
      }, {
        name: 'tipoUsuarioId',
        type: 'varchar(40)',
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
    })), await queryRunner.createForeignKey('usuario', new _typeorm.TableForeignKey({
      columnNames: ['tipoUsuarioId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'tipo_usuario',
      name: 'fk_tipo_usuario_',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('usuario', 'fk_tipo_usuario_');
    await queryRunner.dropTable('usuario');
  }

}

exports.usuario1660752413626 = usuario1660752413626;