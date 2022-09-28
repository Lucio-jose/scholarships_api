"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLoginUseCase = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteLoginUseCase {
  constructor(loginRepository) {
    this.loginRepository = loginRepository;
  }

  async execute(id) {
    const login = await this.loginRepository.pegarUm(id);
    if (!login) throw new _AppError.AppError("Dado não encontrado!", 404);
    await this.loginRepository.deletar(login.id);
  }

}

exports.DeleteLoginUseCase = DeleteLoginUseCase;