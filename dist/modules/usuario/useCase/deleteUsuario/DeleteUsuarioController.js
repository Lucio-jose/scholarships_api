"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteUsuarioController = void 0;

var _AppError = require("../../../../errors/AppError");

class DeleteUsuarioController {
  constructor(deleteUsuarioUseCase) {
    this.deleteUsuarioUseCase = deleteUsuarioUseCase;
  }

  async handle(req, res) {
    try {
      const {
        id
      } = req.params;
      await this.deleteUsuarioUseCase.execute(id);
      return res.status(200).json({
        message: "Dado eliminado com sucesso!"
      });
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

exports.DeleteUsuarioController = DeleteUsuarioController;