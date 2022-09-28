"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _Contacto = require("../../contacto/model/Contacto");

var _Usuario = require("../../usuario/model/Usuario");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Login = (_dec = (0, _typeorm.Entity)('login'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.OneToOne)(() => _Usuario.Usuario, usuario => usuario, {
  eager: true
}), _dec11 = (0, _typeorm.JoinColumn)(), _dec12 = Reflect.metadata("design:type", typeof _Usuario.Usuario === "undefined" ? Object : _Usuario.Usuario), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.OneToOne)(() => _Contacto.Contacto, contacto => contacto, {
  eager: true
}), _dec16 = (0, _typeorm.JoinColumn)(), _dec17 = Reflect.metadata("design:type", typeof _Contacto.Contacto === "undefined" ? Object : _Contacto.Contacto), _dec18 = (0, _typeorm.CreateDateColumn)(), _dec19 = Reflect.metadata("design:type", typeof _typeorm.Timestamp === "undefined" ? Object : _typeorm.Timestamp), _dec20 = (0, _typeorm.CreateDateColumn)(), _dec21 = Reflect.metadata("design:type", typeof _typeorm.Timestamp === "undefined" ? Object : _typeorm.Timestamp), _dec22 = (0, _typeorm.BeforeInsert)(), _dec23 = (0, _typeorm.BeforeUpdate)(), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Login {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "senha", _descriptor2, this);

    _initializerDefineProperty(this, "usuarioId", _descriptor3, this);

    _initializerDefineProperty(this, "usuario", _descriptor4, this);

    _initializerDefineProperty(this, "contactoId", _descriptor5, this);

    _initializerDefineProperty(this, "contacto", _descriptor6, this);

    _initializerDefineProperty(this, "createdAt", _descriptor7, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor8, this);

    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }

  cryptSenha() {
    this.senha = _bcrypt.default.hashSync(this.senha, 8);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "senha", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "usuarioId", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "usuario", [_dec10, _dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "contactoId", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "contacto", [_dec15, _dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "cryptSenha", [_dec22, _dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "cryptSenha"), _class2.prototype)), _class2)) || _class) || _class) || _class);
exports.Login = Login;
;