"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../repositories/implements/UsuarioRepository");

var _GetUsuarioController = require("./GetUsuarioController");

var _GetUsuarioUseCase = require("./GetUsuarioUseCase");

var _default = () => {
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const getUsuarioUseCase = new _GetUsuarioUseCase.GetUsuarioUseCase(usuarioRepository);
  const getUsuarioController = new _GetUsuarioController.GetUsuarioController(getUsuarioUseCase);
  return getUsuarioController;
};

exports.default = _default;