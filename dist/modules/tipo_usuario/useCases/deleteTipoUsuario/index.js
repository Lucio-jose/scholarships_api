"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoUsuarioRepository = require("../../repositories/implements/TipoUsuarioRepository");

var _DeleteTipoUsuarioController = require("./DeleteTipoUsuarioController");

var _DeleteTipoUsuarioUseCase = require("./DeleteTipoUsuarioUseCase");

var _default = () => {
  const tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository();
  const deleteTipoUsuarioUseCase = new _DeleteTipoUsuarioUseCase.DeleteTipoUsuarioUseCase(tipoUsuarioRepo);
  const deleteTipoUsuarioController = new _DeleteTipoUsuarioController.DeleteTipoUsuarioController(deleteTipoUsuarioUseCase);
  return deleteTipoUsuarioController;
};

exports.default = _default;