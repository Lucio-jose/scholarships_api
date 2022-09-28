"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoUsuarioRepository = require("../../repositories/implements/TipoUsuarioRepository");

var _CreateTipoUsuarioController = require("./CreateTipoUsuarioController");

var _CreateTipoUsuarioUseCase = require("./CreateTipoUsuarioUseCase");

var _default = () => {
  const tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository();
  const createTipoUsuarioUseCase = new _CreateTipoUsuarioUseCase.CreateTipoUsuarioUseCase(tipoUsuarioRepo);
  const createTipoUsuarioController = new _CreateTipoUsuarioController.CreateTipoUsuarioController(createTipoUsuarioUseCase);
  return createTipoUsuarioController;
};

exports.default = _default;