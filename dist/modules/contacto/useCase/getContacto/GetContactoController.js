"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetContactoController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetContactoController {
  constructor(getContactoUseCase) {
    this.getContactoUseCase = getContactoUseCase;
  }

  async handle(req, res) {
    try {
      const {
        usuarioId
      } = req.params;
      const contactos = await this.getContactoUseCase.execute(usuarioId);
      return res.status(200).json(contactos);
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

exports.GetContactoController = GetContactoController;
;