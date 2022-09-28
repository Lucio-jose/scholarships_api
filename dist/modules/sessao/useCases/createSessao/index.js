"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactoRepository = require("../../../contacto/repositories/implements/ContactoRepository");

var _LoginRepository = require("../../../login/repositories/implements/LoginRepository");

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _CreateSessaoController = require("./CreateSessaoController");

var _CreateSessaoUseCase = require("./CreateSessaoUseCase");

var _default = () => {
  const loginRepository = new _LoginRepository.LoginRepository();
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const createSessaoUseCase = new _CreateSessaoUseCase.CreateSessaoUseCase(loginRepository, usuarioRepository, contactoRepository);
  const createSessaoController = new _CreateSessaoController.CreateSessaoController(createSessaoUseCase);
  return createSessaoController;
};

exports.default = _default;