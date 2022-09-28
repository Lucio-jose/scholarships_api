"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class CreateContactoUseCase {
  constructor(contactoRepository, usuarioRepo, tipoContactoRepo) {
    this.contactoRepository = contactoRepository;
    this.usuarioRepo = usuarioRepo;
    this.tipoContactoRepo = tipoContactoRepo;
  }

  async execute({
    tipoContactoId,
    usuarioId,
    contacto
  }) {
    const usuario = await this.usuarioRepo.pegarUm(usuarioId);
    if (!usuario) throw new _AppError.AppError("Usuário não encontrado!");
    const tipoContacto = await this.tipoContactoRepo.pegaPorId(tipoContactoId);
    if (!tipoContacto) throw new _AppError.AppError("TipoContacto não encontrado!", 404);
    const contactoSalvo = this.contactoRepository.criar({
      contacto,
      usuarioId,
      tipoContactoId
    });
    return contactoSalvo;
  }

}

exports.CreateContactoUseCase = CreateContactoUseCase;