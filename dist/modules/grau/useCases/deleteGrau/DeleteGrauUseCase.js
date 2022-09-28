"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteGrauUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteGrauUseCase {
  constructor(grauRepo) {
    this.grauRepo = grauRepo;
  }

  async execute(id) {
    const existe = await this.grauRepo.pegaPorId(id);
    if (!existe) throw new _AppError.AppError("Grau não encontrado!", 404);
    await this.grauRepo.deletar(id);
  }

}

exports.DeleteGrauUseCase = DeleteGrauUseCase;
;