"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tipoContato1660742435320 = void 0;

var _typeorm = require("typeorm");

class tipoContato1660742435320 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'tipo_contacto',
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
    await queryRunner.dropTable('tipo_contacto');
  }

}

exports.tipoContato1660742435320 = tipoContato1660742435320;