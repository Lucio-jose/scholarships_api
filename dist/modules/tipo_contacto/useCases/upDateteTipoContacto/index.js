"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoContactoRepository = require("../../repositories/implements/TipoContactoRepository");

var _UpdateTipoContactoController = require("./UpdateTipoContactoController");

var _UpdateTipoContactoUseCase = require("./UpdateTipoContactoUseCase");

var _default = () => {
  const tipoContactoRepo = new _TipoContactoRepository.TipoContactoRepository();
  const updateTipoContactoUseCase = new _UpdateTipoContactoUseCase.UpdateTipoContactoUseCase(tipoContactoRepo);
  const updateTipoContactoController = new _UpdateTipoContactoController.UpdateTipoContactoController(updateTipoContactoUseCase);
  return updateTipoContactoController;
};

exports.default = _default;