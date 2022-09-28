"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GrauRepository = require("../../repositories/implements/GrauRepository");

var _DeleteGrauController = require("./DeleteGrauController");

var _DeleteGrauUseCase = require("./DeleteGrauUseCase");

var _default = () => {
  const grauRepo = new _GrauRepository.GrauRepository();
  const deleteGrauUseCase = new _DeleteGrauUseCase.DeleteGrauUseCase(grauRepo);
  const deleteGrauController = new _DeleteGrauController.DeleteGrauController(deleteGrauUseCase);
  return deleteGrauController;
};

exports.default = _default;