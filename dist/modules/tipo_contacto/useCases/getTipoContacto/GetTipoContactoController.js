"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTipoContactoController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetTipoContactoController {
  constructor(getTipoContactoUseCase) {
    this.getTipoContactoUseCase = getTipoContactoUseCase;
  }

  async handle(req, res) {
    try {
      const tipoContacto = await this.getTipoContactoUseCase.listarTodos();
      return res.status(200).json(tipoContacto);
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

exports.GetTipoContactoController = GetTipoContactoController;
;