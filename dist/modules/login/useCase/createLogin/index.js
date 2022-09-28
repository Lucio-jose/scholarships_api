"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactoRepository = require("../../../contacto/repositories/implements/ContactoRepository");

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _LoginRepository = require("../../repositories/implements/LoginRepository");

var _CreateLoginController = require("./CreateLoginController");

var _CreateLoginUseCase = require("./CreateLoginUseCase");

var _default = () => {
  const loginRepository = new _LoginRepository.LoginRepository();
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const createLoginUseCase = new _CreateLoginUseCase.CreateLoginUseCase(loginRepository, usuarioRepository, contactoRepository);
  const createLoginController = new _CreateLoginController.CreateLoginController(createLoginUseCase);
  return createLoginController;
};

exports.default = _default;