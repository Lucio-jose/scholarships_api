"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../repositories/implements/GrauRepository");

var _GetGrauController = require("./GetGrauController");

var _GetGrauUseCase = require("./GetGrauUseCase");

var _default = () => {
  const grauRepo = new _GrauRepository.GrauRepository();
  const getGrauUseCase = new _GetGrauUseCase.GetGrauUseCase(grauRepo);
  const getGrauController = new _GetGrauController.GetGrauController(getGrauUseCase);
  return getGrauController;
};

exports.default = _default;