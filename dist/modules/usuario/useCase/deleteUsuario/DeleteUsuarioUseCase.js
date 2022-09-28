"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteUsuarioUseCase {
  constructor(UsuarioRepo) {
    this.UsuarioRepo = UsuarioRepo;
  }

  async execute(id) {
    const existe = await this.UsuarioRepo.pegarUm(id);
    if (!existe) throw new _AppError.AppError("Usuario não encontrado!", 404);
    await this.UsuarioRepo.deletar(id);
  }

}

exports.DeleteUsuarioUseCase = DeleteUsuarioUseCase;
;