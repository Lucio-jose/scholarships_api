"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoContactoRepository = require("../../../tipo_contacto/repositories/implements/TipoContactoRepository");

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _ContactoRepository = require("../../repositories/implements/ContactoRepository");

var _CreateContactoController = require("./CreateContactoController");

var _CreateContactoUseCase = require("./CreateContactoUseCase");

var _default = () => {
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const tipoContactoRepo = new _TipoContactoRepository.TipoContactoRepository();
  const contactoRepo = new _ContactoRepository.ContactoRepository();
  const createContactoUseCase = new _CreateContactoUseCase.CreateContactoUseCase(contactoRepo, usuarioRepository, tipoContactoRepo);
  const createContactoController = new _CreateContactoController.CreateContactoController(createContactoUseCase);
  return createContactoController;
};

exports.default = _default;