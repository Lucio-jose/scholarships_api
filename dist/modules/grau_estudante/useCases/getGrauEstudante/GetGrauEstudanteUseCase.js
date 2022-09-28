"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetGrauEstudanteUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class GetGrauEstudanteUseCase {
  constructor(grauEstudanteRepo, estudantepository) {
    this.grauEstudanteRepo = grauEstudanteRepo;
    this.estudantepository = estudantepository;
  }

  async execute(estudanteId) {
    const estudante = await this.estudantepository.pegarUm(estudanteId);
    if (!estudante) throw new _AppError.AppError("Estudante não encontrado!", 404);
    const grauEstudantes = await this.grauEstudanteRepo.pegarPorEstudante(estudanteId);
    return grauEstudantes;
  }

}

exports.GetGrauEstudanteUseCase = GetGrauEstudanteUseCase;
;