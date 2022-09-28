"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoUsuarioRepository = require("../../repositories/implements/TipoUsuarioRepository");

var _GetTipoUsuarioController = require("./GetTipoUsuarioController");

var _GetTipoUsuarioUseCase = require("./GetTipoUsuarioUseCase");

var _default = () => {
  const tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository();
  const getTipoUsuarioUseCase = new _GetTipoUsuarioUseCase.GetTipoUsuarioUseCase(tipoUsuarioRepo);
  const getTipoUsuarioController = new _GetTipoUsuarioController.GetTipoUsuarioController(getTipoUsuarioUseCase);
  return getTipoUsuarioController;
};

exports.default = _default;