"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PutContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class PutContactoUseCase {
  constructor(contactoRepository) {
    this.contactoRepository = contactoRepository;
  }

  async execute(id, contacto) {
    const cont = await this.contactoRepository.pegarUm(id);
    if (!cont) throw new _AppError.AppError("Contacto não encontrado!", 404);
    const contactoAtualizado = await this.contactoRepository.atualizar(cont, {
      contacto
    });
    return contactoAtualizado;
  }

}

exports.PutContactoUseCase = PutContactoUseCase;