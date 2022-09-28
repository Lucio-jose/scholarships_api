"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../../grau/repositories/implements/GrauRepository");

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _GrauEstudanteRepository = require("../../repositories/implements/GrauEstudanteRepository");

var _CreateGrauEstudanteController = require("./CreateGrauEstudanteController");

var _CreateGrauEstudanteUseCase = require("./CreateGrauEstudanteUseCase");

var _default = () => {
  const estudanteRepository = new _UsuarioRepository.UsuarioRepository();
  const grauRepo = new _GrauRepository.GrauRepository();
  const grauEstudanteRepo = new _GrauEstudanteRepository.GrauEstudanteRepository();
  const createGrauEstudanteUseCase = new _CreateGrauEstudanteUseCase.CreateGrauEstudanteUseCase(grauEstudanteRepo, estudanteRepository, grauRepo);
  const createGrauEstudanteController = new _CreateGrauEstudanteController.CreateGrauEstudanteController(createGrauEstudanteUseCase);
  return createGrauEstudanteController;
};

exports.default = _default;