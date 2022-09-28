"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateGrauEstudanteUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class UpdateGrauEstudanteUseCase {
  constructor(grauEstudanteRepo, grauRepository) {
    this.grauEstudanteRepo = grauEstudanteRepo;
    this.grauRepository = grauRepository;
  }

  async execute(id, grauId) {
    const grauEst = await this.grauEstudanteRepo.pegarUm(id);
    if (!grauEst) throw new _AppError.AppError("Grau de Estudante não encontrado!", 404);
    const grau = await this.grauRepository.pegaPorId(grauId);
    if (!grau) throw new _AppError.AppError("Grau não encontrado!", 404);
    const grauEstudante = await this.grauEstudanteRepo.atualizar(grauEst, {
      grauId,
      grau
    });
    return grauEstudante;
  }

}

exports.UpdateGrauEstudanteUseCase = UpdateGrauEstudanteUseCase;