"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGrauUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateGrauUseCase {
  constructor(GrauRepo) {
    this.GrauRepo = GrauRepo;
  }

  async execute(designacao) {
    const existeDesignacao = await this.GrauRepo.pegaPorDesignacao(designacao);
    if (existeDesignacao) throw new _AppError.AppError("Tipo de usuário já existente!", 400);
    const grau = await this.GrauRepo.criar(designacao);
    return grau;
  }

}

exports.CreateGrauUseCase = CreateGrauUseCase;