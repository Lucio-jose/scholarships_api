"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grauRouter = void 0;

var _express = require("express");

var _createGrau = _interopRequireDefault(require("../modules/grau/useCases/createGrau"));

var _deleteGrau = _interopRequireDefault(require("../modules/grau/useCases/deleteGrau"));

var _getGrau = _interopRequireDefault(require("../modules/grau/useCases/getGrau"));

var _updateGrau = _interopRequireDefault(require("../modules/grau/useCases/updateGrau"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const grauRouter = (0, _express.Router)();
exports.grauRouter = grauRouter;
grauRouter.post("/", (req, res) => {
  (0, _createGrau.default)().handle(req, res);
});
grauRouter.get("/", (req, res) => {
  (0, _getGrau.default)().handle(req, res);
});
grauRouter.put("/:id", (req, res) => {
  (0, _updateGrau.default)().handle(req, res);
});
grauRouter.delete("/:id", (req, res) => {
  (0, _deleteGrau.default)().handle(req, res);
});