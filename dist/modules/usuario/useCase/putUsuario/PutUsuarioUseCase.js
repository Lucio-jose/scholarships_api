"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PutUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class PutUsuarioUseCase {
  constructor(usuarioRepo) {
    this.usuarioRepo = usuarioRepo;
  }

  async execute(id, {
    nome,
    sobreNome
  }) {
    const existe = await this.usuarioRepo.pegarUm(id);
    if (!existe) throw new _AppError.AppError("Usuário não encontrado!");
    const usuarioActualizado = await this.usuarioRepo.atualizar(existe, {
      nome,
      sobreNome
    });
    return usuarioActualizado;
  }

}

exports.PutUsuarioUseCase = PutUsuarioUseCase;