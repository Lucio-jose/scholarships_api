"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../../usuario/repositories/implements/UsuarioRepository");

var _GrauEstudanteRepository = require("../../repositories/implements/GrauEstudanteRepository");

var _GetGrauEstudanteController = require("./GetGrauEstudanteController");

var _GetGrauEstudanteUseCase = require("./GetGrauEstudanteUseCase");

var _default = () => {
  const grauEstudanteRepository = new _GrauEstudanteRepository.GrauEstudanteRepository();
  const estudanteRepository = new _UsuarioRepository.UsuarioRepository();
  const getGrauEstudanteUseCase = new _GetGrauEstudanteUseCase.GetGrauEstudanteUseCase(grauEstudanteRepository, estudanteRepository);
  const getGrauEstudanteController = new _GetGrauEstudanteController.GetGrauEstudanteController(getGrauEstudanteUseCase);
  return getGrauEstudanteController;
};

exports.default = _default;