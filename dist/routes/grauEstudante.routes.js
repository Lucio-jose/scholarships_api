"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grauEstudanteRouter = void 0;

var _express = require("express");

var _index = _interopRequireDefault(require("../modules/grau_estudante/useCases/createGrauEstudante/index"));

var _updateGrauEstudante = _interopRequireDefault(require("../modules/grau_estudante/useCases/updateGrauEstudante"));

var _getGrauEstudante = _interopRequireDefault(require("../modules/grau_estudante/useCases/getGrauEstudante"));

var _getEstudanteGrau = _interopRequireDefault(require("../modules/grau_estudante/useCases/getEstudanteGrau"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const grauEstudanteRouter = (0, _express.Router)();
exports.grauEstudanteRouter = grauEstudanteRouter;
grauEstudanteRouter.post("/", (req, res) => {
  (0, _index.default)().handle(req, res);
});
grauEstudanteRouter.put("/:id", (req, res) => {
  (0, _updateGrauEstudante.default)().handle(req, res);
});
grauEstudanteRouter.get("/estudante/:estudanteId", (req, res) => {
  (0, _getGrauEstudante.default)().handle(req, res);
});
grauEstudanteRouter.get("/grau/:grauId", (req, res) => {
  (0, _getEstudanteGrau.default)().handle(req, res);
});