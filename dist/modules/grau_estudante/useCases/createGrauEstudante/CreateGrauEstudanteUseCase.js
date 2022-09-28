"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateGrauEstudanteUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateGrauEstudanteUseCase {
  constructor(grauEstudanteRepo, estudanteRepo, grauRepository) {
    this.grauEstudanteRepo = grauEstudanteRepo;
    this.estudanteRepo = estudanteRepo;
    this.grauRepository = grauRepository;
  }

  async execute(grauId, estudanteId) {
    const estudante = await this.estudanteRepo.pegarUm(estudanteId);
    if (!estudante) throw new _AppError.AppError("Estudante não encontrado!", 404);
    const grau = await this.grauRepository.pegaPorId(grauId);
    if (!grau) throw new _AppError.AppError("Grau não encontrado!", 404);
    const existeEstudante = await this.grauEstudanteRepo.pegarPorEstudante(estudante.id);
    if (existeEstudante) throw new _AppError.AppError("Estudante já tem um grau!", 400);
    if (estudante.tipoUsuario.designacao.toLowerCase() !== "estudante") throw new _AppError.AppError("Usuário não autorizado!", 400);
    const grauEstudanteSalvo = this.grauEstudanteRepo.criar(grauId, estudanteId);
    return grauEstudanteSalvo;
  }

}

exports.CreateGrauEstudanteUseCase = CreateGrauEstudanteUseCase;