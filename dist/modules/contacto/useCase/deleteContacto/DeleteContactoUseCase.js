"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteContactoUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteContactoUseCase {
  constructor(contactoRepository) {
    this.contactoRepository = contactoRepository;
  }

  async execute(id) {
    const contacto = await this.contactoRepository.pegarUm(id);
    if (!contacto) throw new _AppError.AppError("Contacto não encontrado!", 404);
    this.contactoRepository.deletar(contacto.id);
  }

}

exports.DeleteContactoUseCase = DeleteContactoUseCase;
;