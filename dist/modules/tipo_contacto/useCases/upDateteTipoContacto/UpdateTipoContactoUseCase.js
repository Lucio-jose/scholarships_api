"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTipoContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class UpdateTipoContactoUseCase {
  constructor(tipoContactoRepo) {
    this.tipoContactoRepo = tipoContactoRepo;
  }

  async execute(id, {
    designacao
  }) {
    const existeTipo = await this.tipoContactoRepo.pegaPorId(id);
    if (!existeTipo) throw new _AppError.AppError("Tipo Usuário não encontrado!", 404);
    const tipoActualizado = await this.tipoContactoRepo.actualizar(existeTipo, {
      designacao
    });
    return tipoActualizado;
  }

}

exports.UpdateTipoContactoUseCase = UpdateTipoContactoUseCase;