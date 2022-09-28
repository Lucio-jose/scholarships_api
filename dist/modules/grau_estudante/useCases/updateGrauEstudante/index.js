"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../../grau/repositories/implements/GrauRepository");

var _GrauEstudanteRepository = require("../../repositories/implements/GrauEstudanteRepository");

var _UpdateGrauEstudanteController = require("./UpdateGrauEstudanteController");

var _updateGrauEstudanteUseCase = require("./updateGrauEstudanteUseCase");

var _default = () => {
  const grauRepository = new _GrauRepository.GrauRepository();
  const grauEstudanteRepo = new _GrauEstudanteRepository.GrauEstudanteRepository();
  const updateGrauEstudanteUseCase = new _updateGrauEstudanteUseCase.UpdateGrauEstudanteUseCase(grauEstudanteRepo, grauRepository);
  const updateGrauEstudanteController = new _UpdateGrauEstudanteController.UpdateGrauEstudanteController(updateGrauEstudanteUseCase);
  return updateGrauEstudanteController;
};

exports.default = _default;