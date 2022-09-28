"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../repositories/implements/UsuarioRepository");

var _DeleteUsuarioController = require("./DeleteUsuarioController");

var _DeleteUsuarioUseCase = require("./DeleteUsuarioUseCase");

var _default = () => {
  const usuarioRepo = new _UsuarioRepository.UsuarioRepository();
  const deleteUsuarioUseCase = new _DeleteUsuarioUseCase.DeleteUsuarioUseCase(usuarioRepo);
  const deleteUsuarioController = new _DeleteUsuarioController.DeleteUsuarioController(deleteUsuarioUseCase);
  return deleteUsuarioController;
};

exports.default = _default;