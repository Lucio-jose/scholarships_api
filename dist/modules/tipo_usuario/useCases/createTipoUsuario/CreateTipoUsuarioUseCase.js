"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTipoUsuarioUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateTipoUsuarioUseCase {
  constructor(tipoUsuarioRepo) {
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async execute(designacao) {
    const existeDesignacao = await this.tipoUsuarioRepo.pegaPorDesignacao(designacao);
    if (existeDesignacao) throw new _AppError.AppError("Tipo de usuário já existente!", 400);
    const tipoUsuario = await this.tipoUsuarioRepo.criar(designacao);
    return tipoUsuario;
  }

}

exports.CreateTipoUsuarioUseCase = CreateTipoUsuarioUseCase;