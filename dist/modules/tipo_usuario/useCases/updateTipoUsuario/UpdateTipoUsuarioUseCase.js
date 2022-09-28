"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTipoUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class UpdateTipoUsuarioUseCase {
  constructor(tipoUsuarioRepo) {
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async execute(id, {
    designacao
  }) {
    const existeTipo = await this.tipoUsuarioRepo.pegaPorId(id);
    if (!existeTipo) throw new _AppError.AppError("Tipo Usuário não encontrado!", 404);
    const tipoActualizado = await this.tipoUsuarioRepo.actualizar(existeTipo, {
      designacao
    });
    return tipoActualizado;
  }

}

exports.UpdateTipoUsuarioUseCase = UpdateTipoUsuarioUseCase;