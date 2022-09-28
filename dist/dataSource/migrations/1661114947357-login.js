"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login1661114947357 = void 0;

var _typeorm = require("typeorm");

class login1661114947357 {
  async up(queryRunner) {
    ~(await queryRunner.createTable(new _typeorm.Table({
      name: 'login',
      columns: [{
        name: 'id',
        type: 'varchar(40)',
        isPrimary: true
      }, {
        name: 'senha',
        type: 'varchar',
        isNullable: false
      }, {
        name: 'usuarioId',
        type: 'varchar(40)',
        isNullable: false
      }, {
        name: 'contactoId',
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
    })));
    await queryRunner.createForeignKey('login', new _typeorm.TableForeignKey({
      columnNames: ['contactoId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'contacto',
      name: 'fk_login_contacto_',
      onUpdate: 'CASCADE'
    }));
    await queryRunner.createForeignKey('login', new _typeorm.TableForeignKey({
      columnNames: ['usuarioId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'usuario',
      name: 'fk_login_usuario_',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey('login', 'fk_login_usuario_');
    await queryRunner.dropForeignKey('login', 'fk_login_contacto_');
    await queryRunner.dropTable('login');
  }

}

exports.login1661114947357 = login1661114947357;