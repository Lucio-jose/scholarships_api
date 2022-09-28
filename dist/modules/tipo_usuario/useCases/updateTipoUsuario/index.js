"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoUsuarioRepository = require("../../repositories/implements/TipoUsuarioRepository");

var _UpdateTipoUsuarioController = require("./UpdateTipoUsuarioController");

var _UpdateTipoUsuarioUseCase = require("./UpdateTipoUsuarioUseCase");

var _default = () => {
  const tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository();
  const updateTipoUsuarioUseCase = new _UpdateTipoUsuarioUseCase.UpdateTipoUsuarioUseCase(tipoUsuarioRepo);
  const updateTipoUsuarioController = new _UpdateTipoUsuarioController.UpdateTipoUsuarioController(updateTipoUsuarioUseCase);
  return updateTipoUsuarioController;
};

exports.default = _default;