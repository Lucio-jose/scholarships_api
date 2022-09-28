"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class GetContactoUseCase {
  constructor(contactoRepository, usuarioRepository) {
    this.contactoRepository = contactoRepository;
    this.usuarioRepository = usuarioRepository;
  }

  async execute(usuarioId) {
    const usuario = await this.usuarioRepository.pegarUm(usuarioId);
    if (!usuario) throw new _AppError.AppError("Usuário não encontrado!", 404);
    const contactos = await this.contactoRepository.listar(usuario.id);
    return contactos;
  }

}

exports.GetContactoUseCase = GetContactoUseCase;
;