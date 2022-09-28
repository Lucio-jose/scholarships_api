"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetGrauController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetGrauController {
  constructor(getGrauUseCase) {
    this.getGrauUseCase = getGrauUseCase;
  }

  async handle(req, res) {
    try {
      const grau = await this.getGrauUseCase.listarTodos();
      return res.status(200).json(grau);
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

exports.GetGrauController = GetGrauController;
;