"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTipoContactoUseCase = void 0;

class GetTipoContactoUseCase {
  constructor(tipoContactoRepo) {
    this.tipoContactoRepo = tipoContactoRepo;
  }

  async listarTodos() {
    const tipoContactos = await this.tipoContactoRepo.listar();
    return tipoContactos;
  }

}

exports.GetTipoContactoUseCase = GetTipoContactoUseCase;
;