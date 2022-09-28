"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurnUsuarioAdminUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class TurnUsuarioAdminUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async execute(id) {
    const existeUsuario = await this.usuarioRepository.pegarUm(id);
    if (!existeUsuario) throw new _AppError.AppError("Usuário não encontrado!", 404);
    if (existeUsuario.tipoUsuario.designacao.toLowerCase() === 'administrador geral') throw new _AppError.AppError("Operação inválida!", 400);
    const usuario = await this.usuarioRepository.turnUsuarioAdmin(existeUsuario);
    return usuario;
  }

}

exports.TurnUsuarioAdminUseCase = TurnUsuarioAdminUseCase;