"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTipoUsuarioController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetTipoUsuarioController {
  constructor(getTipoUsuarioUseCase) {
    this.getTipoUsuarioUseCase = getTipoUsuarioUseCase;
  }

  async handle(req, res) {
    try {
      const tipoUsuario = await this.getTipoUsuarioUseCase.listarTodos();
      return res.status(200).json(tipoUsuario);
    } catch (err) {
      if (err instanceof _AppError.AppError) {
        return res.status(err.status).json({
          error: err.message,
          status: err.status
        });
      }

      return res.status(500).json({
        message: err.message,
        status: 500
      });
    }
  }

}

exports.GetTipoUsuarioController = GetTipoUsuarioController;
;