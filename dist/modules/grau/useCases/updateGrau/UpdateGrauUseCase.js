"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateGrauUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class UpdateGrauUseCase {
  constructor(grauRepo) {
    this.grauRepo = grauRepo;
  }

  async execute(id, {
    designacao
  }) {
    const existeTipo = await this.grauRepo.pegaPorId(id);
    if (!existeTipo) throw new _AppError.AppError("Tipo Usuário não encontrado!", 404);
    const tipoActualizado = await this.grauRepo.actualizar(existeTipo, {
      designacao
    });
    return tipoActualizado;
  }

}

exports.UpdateGrauUseCase = UpdateGrauUseCase;