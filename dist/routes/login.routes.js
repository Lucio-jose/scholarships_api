"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginRouter = void 0;

var _express = require("express");

var _index = _interopRequireDefault(require("../modules/login/useCase/createLogin/index"));

var _index2 = _interopRequireDefault(require("../modules/login/useCase/deleteLogin/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loginRouter = (0, _express.Router)();
exports.loginRouter = loginRouter;
loginRouter.post("/", (req, res) => {
  (0, _index.default)().handle(req, res);
});
loginRouter.delete("/:id", (req, res) => {
  (0, _index2.default)().handle(req, res);
});