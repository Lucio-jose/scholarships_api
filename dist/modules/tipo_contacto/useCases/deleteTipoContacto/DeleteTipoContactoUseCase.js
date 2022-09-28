"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTipoContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteTipoContactoUseCase {
  constructor(tipoContactoRepo) {
    this.tipoContactoRepo = tipoContactoRepo;
  }

  async execute(id) {
    const existeTipo = await this.tipoContactoRepo.pegaPorId(id);
    if (!existeTipo) throw new _AppError.AppError("TipoContacto não encontrado!", 404);
    await this.tipoContactoRepo.deletar(id);
  }

}

exports.DeleteTipoContactoUseCase = DeleteTipoContactoUseCase;
;