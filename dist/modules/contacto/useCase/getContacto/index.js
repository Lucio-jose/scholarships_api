"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _ContactoRepository = require("../../repositories/implements/ContactoRepository");

var _GetContactoController = require("./GetContactoController");

var _GetContactoUseCase = require("./GetContactoUseCase");

var _default = () => {
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const getContactoUseCase = new _GetContactoUseCase.GetContactoUseCase(contactoRepository, usuarioRepository);
  const getContactoController = new _GetContactoController.GetContactoController(getContactoUseCase);
  return getContactoController;
};

exports.default = _default;