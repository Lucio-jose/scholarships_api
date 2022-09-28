"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUsuarioUseCase = void 0;

class GetUsuarioUseCase {
  constructor(UsuarioRepo) {
    this.UsuarioRepo = UsuarioRepo;
  }

  async execute() {
    const usuarios = await this.UsuarioRepo.listar();
    return usuarios;
  }

}

exports.GetUsuarioUseCase = GetUsuarioUseCase;
;