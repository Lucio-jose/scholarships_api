"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contacto1660823032344 = void 0;

var _typeorm = require("typeorm");

class contacto1660823032344 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'contacto',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'contacto',
        type: 'varchar(60)',
        isNullable: false
      }, {
        name: 'tipoContactoId',
        type: 'varchar(40)',
        isNullable: false
      }, {
        name: 'usuarioId',
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
    })), await queryRunner.createForeignKey('contacto', new _typeorm.TableForeignKey({
      columnNames: ['tipoContactoId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'tipo_contacto',
      name: 'fk_tipo_contacto_',
      onUpdate: 'CASCADE'
    }));
    await queryRunner.createForeignKey('contacto', new _typeorm.TableForeignKey({
      columnNames: ['usuarioId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuario',
      name: 'fk_contacto_usuario_',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('contacto', 'fk_contacto_usuario_');
    await queryRunner.dropForeignKey('contacto', 'fk_tipo_contacto_');
    await queryRunner.dropTable('contacto');
  }

}

exports.contacto1660823032344 = contacto1660823032344;