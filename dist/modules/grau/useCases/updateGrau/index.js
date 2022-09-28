"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../repositories/implements/GrauRepository");

var _UpdateGrauController = require("./UpdateGrauController");

var _UpdateGrauUseCase = require("./UpdateGrauUseCase");

var _default = () => {
  const grauRepo = new _GrauRepository.GrauRepository();
  const updateGrauUseCase = new _UpdateGrauUseCase.UpdateGrauUseCase(grauRepo);
  const updateGrauController = new _UpdateGrauController.UpdateGrauController(updateGrauUseCase);
  return updateGrauController;
};

exports.default = _default;