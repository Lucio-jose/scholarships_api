"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTipoContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateTipoContactoUseCase {
  constructor(tipoContactoRepo) {
    this.tipoContactoRepo = tipoContactoRepo;
  }

  async execute(designacao) {
    const existeDesignacao = await this.tipoContactoRepo.pegaPorDesignacao(designacao);
    if (existeDesignacao) throw new _AppError.AppError("Tipo de usuário já existente!", 404);
    const tipoContacto = await this.tipoContactoRepo.criar(designacao);
    return tipoContacto;
  }

}

exports.CreateTipoContactoUseCase = CreateTipoContactoUseCase;