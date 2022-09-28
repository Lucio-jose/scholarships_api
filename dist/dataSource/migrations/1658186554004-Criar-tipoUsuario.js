"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CriarTipoUsuario1658186554004 = void 0;

var _typeorm = require("typeorm");

class CriarTipoUsuario1658186554004 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'tipo_usuario',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'designacao',
        type: 'varchar(30)',
        isUnique: true
      }, {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('tipo_usuario');
  }

}

exports.CriarTipoUsuario1658186554004 = CriarTipoUsuario1658186554004;