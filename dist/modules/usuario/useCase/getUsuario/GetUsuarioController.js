"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUsuarioController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetUsuarioController {
  constructor(getUsuarioUseCase) {
    this.getUsuarioUseCase = getUsuarioUseCase;
  }

  async handle(req, res) {
    try {
      const usuario = await this.getUsuarioUseCase.execute();
      return res.status(200).json(usuario);
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

exports.GetUsuarioController = GetUsuarioController;
;