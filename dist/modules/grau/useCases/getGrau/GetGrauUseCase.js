"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetGrauUseCase = void 0;

class GetGrauUseCase {
  constructor(grauRepo) {
    this.grauRepo = grauRepo;
  }

  async listarTodos() {
    const graus = await this.grauRepo.listar();
    return graus;
  }

}

exports.GetGrauUseCase = GetGrauUseCase;
;