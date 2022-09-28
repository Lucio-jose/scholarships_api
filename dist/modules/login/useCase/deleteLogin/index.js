"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactoRepository = require("../../../contacto/repositories/implements/ContactoRepository");

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _LoginRepository = require("../../repositories/implements/LoginRepository");

var _DeleteLoginController = require("./DeleteLoginController");

var _deleteLoginUseCase = require("./deleteLoginUseCase");

var _default = () => {
  const loginRepository = new _LoginRepository.LoginRepository();
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const deleteLoginUseCase = new _deleteLoginUseCase.DeleteLoginUseCase(loginRepository);
  const deleteLoginController = new _DeleteLoginController.DeleteLoginController(deleteLoginUseCase);
  return deleteLoginController;
};

exports.default = _default;