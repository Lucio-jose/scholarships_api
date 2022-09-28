"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TipoContactoRepository = require("../../repositories/implements/TipoContactoRepository");

var _DeleteTipoContactoController = require("./DeleteTipoContactoController");

var _DeleteTipoContactoUseCase = require("./DeleteTipoContactoUseCase");

var _default = () => {
  const tipoContactoRepo = new _TipoContactoRepository.TipoContactoRepository();
  const deleteTipoContactoUseCase = new _DeleteTipoContactoUseCase.DeleteTipoContactoUseCase(tipoContactoRepo);
  const deleteTipoContactoController = new _DeleteTipoContactoController.DeleteTipoContactoController(deleteTipoContactoUseCase);
  return deleteTipoContactoController;
};

exports.default = _default;