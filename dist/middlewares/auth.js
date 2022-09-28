"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autenticacao = void 0;

var _auth = _interopRequireDefault(require("../config/auth"));

var _jsonwebtoken = require("jsonwebtoken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Autenticacao {
  async auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.json({
        message: 'Token not provided',
        status: 400
      });
    }

    const [, token] = authHeader.split(' ');

    try {
      const decoded = (0, _jsonwebtoken.verify)(token, _auth.default.key);
      const {
        usuarioId
      } = decoded;
      req.usuarioId = usuarioId;
      return next();
    } catch (err) {
      return res.status(400).json({
        catch: `error: ${err}`
      });
    }
  }

}

exports.Autenticacao = Autenticacao;