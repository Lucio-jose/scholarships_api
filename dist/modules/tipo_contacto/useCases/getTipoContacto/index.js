"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoContactoRepository = require("../../repositories/implements/TipoContactoRepository");

var _GetTipoContactoController = require("./GetTipoContactoController");

var _GetTipoContactoUseCase = require("./GetTipoContactoUseCase");

var _default = () => {
  const tipoContactoRepo = new _TipoContactoRepository.TipoContactoRepository();
  const getTipoContactoUseCase = new _GetTipoContactoUseCase.GetTipoContactoUseCase(tipoContactoRepo);
  const getTipoContactoController = new _GetTipoContactoController.GetTipoContactoController(getTipoContactoUseCase);
  return getTipoContactoController;
};

exports.default = _default;