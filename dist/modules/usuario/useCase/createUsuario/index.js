"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoUsuarioRepository = require("../../../tipo_usuario/repositories/implements/TipoUsuarioRepository");

var _UsuarioRepository = require("../../repositories/implements/UsuarioRepository");

var _CreateUsuarioController = require("./CreateUsuarioController");

var _CreateUsuarioUseCase = require("./CreateUsuarioUseCase");

var _default = () => {
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository();
  const createUsuarioUseCase = new _CreateUsuarioUseCase.CreateUsuarioUseCase(usuarioRepository, tipoUsuarioRepo);
  const createUsuarioController = new _CreateUsuarioController.CreateUsuarioController(createUsuarioUseCase);
  return createUsuarioController;
};

exports.default = _default;