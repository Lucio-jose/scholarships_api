"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../repositories/implements/UsuarioRepository");

var _TurnUsuarioAdminController = require("./TurnUsuarioAdminController");

var _TurnUsuarioAdminUseCase = require("./TurnUsuarioAdminUseCase");

var _default = () => {
  const usuarioRepo = new _UsuarioRepository.UsuarioRepository();
  const turnUsuarioAdminUseCase = new _TurnUsuarioAdminUseCase.TurnUsuarioAdminUseCase(usuarioRepo);
  const turnUsuarioAdminController = new _TurnUsuarioAdminController.TurnUsuarioAdminController(turnUsuarioAdminUseCase);
  return turnUsuarioAdminController;
};

exports.default = _default;