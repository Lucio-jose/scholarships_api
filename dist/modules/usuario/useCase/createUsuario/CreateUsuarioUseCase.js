"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateUsuarioUseCase {
  constructor(usuarioRepo, tipoUsuarioRepo) {
    this.usuarioRepo = usuarioRepo;
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async execute({
    nome,
    sobreNome,
    tipoUsuarioId,
    dataNascimento
  }) {
    const existeTipo = await this.tipoUsuarioRepo.pegaPorId(tipoUsuarioId);
    if (!existeTipo) throw new _AppError.AppError("TipoUsuário não encontrado!", 404);
    const usuario = await this.usuarioRepo.criar({
      nome,
      sobreNome,
      tipoUsuarioId,
      dataNascimento
    });
    return usuario;
  }

}

exports.CreateUsuarioUseCase = CreateUsuarioUseCase;