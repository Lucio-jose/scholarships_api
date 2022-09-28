"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../../grau/repositories/implements/GrauRepository");

var _GrauEstudanteRepository = require("../../repositories/implements/GrauEstudanteRepository");

var _GetEstudanteGrauController = require("./GetEstudanteGrauController");

var _GetEstudanteGrauUseCase = require("./GetEstudanteGrauUseCase");

var _default = () => {
  const estudantegrauRepository = new _GrauEstudanteRepository.GrauEstudanteRepository();
  const grauRepository = new _GrauRepository.GrauRepository();
  const getEstudanteGrauUseCase = new _GetEstudanteGrauUseCase.GetEstudanteGrauUseCase(estudantegrauRepository, grauRepository);
  const getEstudanteGrauController = new _GetEstudanteGrauController.GetEstudanteGrauController(getEstudanteGrauUseCase);
  return getEstudanteGrauController;
};

exports.default = _default;