"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLoginUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateLoginUseCase {
  constructor(loginRepository, usuarioRepository, contactoRepository) {
    this.loginRepository = loginRepository;
    this.usuarioRepository = usuarioRepository;
    this.contactoRepository = contactoRepository;
  }

  async execute({
    senha,
    usuarioId,
    contactoId
  }) {
    const contacto = await this.contactoRepository.pegarUm(contactoId);
    if (!contacto) throw new _AppError.AppError("Contacto não encontrado!", 404);
    const usuario = await this.usuarioRepository.pegarUm(usuarioId);
    if (!usuario) throw new _AppError.AppError("Usuário não encontrado!", 404);
    const contactoLogin = await this.loginRepository.getLoginContacto(contactoId);
    if (contactoLogin) throw new _AppError.AppError("Contacto inválido!", 400);
    const usuarioLogin = await this.loginRepository.getLoginUsuario(usuarioId);
    if (usuarioLogin) throw new _AppError.AppError("Usuário inválido!", 400);
    if (contacto.usuarioId !== usuario.id) throw new _AppError.AppError("Permissão não concedida!", 400);
    const login = await this.loginRepository.criar({
      senha,
      usuarioId,
      contactoId
    });
    return login;
  }

}

exports.CreateLoginUseCase = CreateLoginUseCase;