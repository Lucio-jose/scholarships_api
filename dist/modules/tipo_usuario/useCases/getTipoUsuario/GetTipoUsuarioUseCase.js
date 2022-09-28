"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTipoUsuarioUseCase = void 0;

class GetTipoUsuarioUseCase {
  constructor(tipoUsuarioRepo) {
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async listarTodos() {
    const tipoUsuarios = await this.tipoUsuarioRepo.listar();
    return tipoUsuarios;
  }

}

exports.GetTipoUsuarioUseCase = GetTipoUsuarioUseCase;
;