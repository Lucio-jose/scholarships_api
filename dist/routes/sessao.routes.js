"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessaoRouter = void 0;

var _express = require("express");

var _createSessao = _interopRequireDefault(require("../modules/sessao/useCases/createSessao"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sessaoRouter = (0, _express.Router)();
exports.sessaoRouter = sessaoRouter;
sessaoRouter.post("/", (req, res) => {
  (0, _createSessao.default)().handle(req, res);
});