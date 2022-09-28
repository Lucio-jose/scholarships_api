"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetGrauEstudanteController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetGrauEstudanteController {
  constructor(getGrauEstudanteUseCase) {
    this.getGrauEstudanteUseCase = getGrauEstudanteUseCase;
  }

  async handle(req, res) {
    try {
      const {
        estudanteId
      } = req.params;
      const grauEstudante = await this.getGrauEstudanteUseCase.execute(estudanteId);
      return res.status(200).json(grauEstudante);
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

exports.GetGrauEstudanteController = GetGrauEstudanteController;
;