"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoContactoRepository = require("../../repositories/implements/TipoContactoRepository");

var _CreateTipoContactoController = require("./CreateTipoContactoController");

var _CreateTipoContactoUseCase = require("./CreateTipoContactoUseCase");

var _default = () => {
  const tipoContactoRepo = new _TipoContactoRepository.TipoContactoRepository();
  const createTipoContactoUseCase = new _CreateTipoContactoUseCase.CreateTipoContactoUseCase(tipoContactoRepo);
  const createTipoContactoController = new _CreateTipoContactoController.CreateTipoContactoController(createTipoContactoUseCase);
  return createTipoContactoController;
};

exports.default = _default;