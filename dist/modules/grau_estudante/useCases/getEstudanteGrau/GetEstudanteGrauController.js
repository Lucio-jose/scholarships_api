"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetEstudanteGrauController = void 0;

var _AppError = require("../../../../errors/AppError");

class GetEstudanteGrauController {
  constructor(getEstudanteGrauUseCase) {
    this.getEstudanteGrauUseCase = getEstudanteGrauUseCase;
  }

  async handle(req, res) {
    try {
      const {
        grauId
      } = req.params;
      const grauEstudante = await this.getEstudanteGrauUseCase.execute(grauId);
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

exports.GetEstudanteGrauController = GetEstudanteGrauController;
;