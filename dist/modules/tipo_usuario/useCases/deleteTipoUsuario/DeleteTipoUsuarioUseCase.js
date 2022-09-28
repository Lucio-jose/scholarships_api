"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTipoUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteTipoUsuarioUseCase {
  constructor(tipoUsuarioRepo) {
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async execute(id) {
    const existeTipo = await this.tipoUsuarioRepo.pegaPorId(id);
    if (!existeTipo) throw new _AppError.AppError("TipoUsuario não encontrado!", 404);
    await this.tipoUsuarioRepo.deletar(id);
  }

}

exports.DeleteTipoUsuarioUseCase = DeleteTipoUsuarioUseCase;
;