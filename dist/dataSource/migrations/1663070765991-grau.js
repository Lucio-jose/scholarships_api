"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grau1663070765991 = void 0;

var _typeorm = require("typeorm");

class grau1663070765991 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'grau',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'designacao',
        type: 'varchar(60)',
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
    await queryRunner.dropTable('grau');
  }

}

exports.grau1663070765991 = grau1663070765991;