"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurnUsuarioAdminController = void 0;

var _AppError = require("../../../../errors/AppError");

class TurnUsuarioAdminController {
  constructor(turnUsuarioAdminUse) {
    this.turnUsuarioAdminUse = turnUsuarioAdminUse;
  }

  async handle(req, res) {
    try {
      const {
        id
      } = req.params;
      const usuario = await this.turnUsuarioAdminUse.execute(id);
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

exports.TurnUsuarioAdminController = TurnUsuarioAdminController;