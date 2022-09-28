"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetEstudanteGrauUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class GetEstudanteGrauUseCase {
  constructor(grauEstudanteRepo, grauRepository) {
    this.grauEstudanteRepo = grauEstudanteRepo;
    this.grauRepository = grauRepository;
  }

  async execute(grauId) {
    const grau = await this.grauRepository.pegaPorId(grauId);
    if (!grau) throw new _AppError.AppError("Grau não encontrado!", 404);
    const estudanteGrau = await this.grauEstudanteRepo.pegarPorGrau(grauId);
    return estudanteGrau;
  }

}

exports.GetEstudanteGrauUseCase = GetEstudanteGrauUseCase;
;