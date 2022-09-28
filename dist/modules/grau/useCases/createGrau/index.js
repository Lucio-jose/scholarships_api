"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../repositories/implements/GrauRepository");

var _CreateGrauController = require("./CreateGrauController");

var _createGrauUseCase = require("./createGrauUseCase");

var _default = () => {
  const grauRepo = new _GrauRepository.GrauRepository();
  const createGrauUseCase = new _createGrauUseCase.CreateGrauUseCase(grauRepo);
  const createGrauController = new _CreateGrauController.CreateGrauController(createGrauUseCase);
  return createGrauController;
};

exports.default = _default;