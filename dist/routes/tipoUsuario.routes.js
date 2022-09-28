"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tipoUsuarioRouter = void 0;

var _express = require("express");

var _index = _interopRequireDefault(require("../modules/tipo_usuario/useCases/createTipoUsuario/index"));

var _index2 = _interopRequireDefault(require("../modules/tipo_usuario/useCases/getTipoUsuario/index"));

var _index3 = _interopRequireDefault(require("../modules/tipo_usuario/useCases/updateTipoUsuario/index"));

var _index4 = _interopRequireDefault(require("../modules/tipo_usuario/useCases/deleteTipoUsuario/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tipoUsuarioRouter = (0, _express.Router)();
exports.tipoUsuarioRouter = tipoUsuarioRouter;
tipoUsuarioRouter.post("/", (req, res) => {
  (0, _index.default)().handle(req, res);
});
tipoUsuarioRouter.get("/", (req, res) => {
  (0, _index2.default)().handle(req, res);
});
tipoUsuarioRouter.put("/:id", (req, res) => {
  (0, _index3.default)().handle(req, res);
});
tipoUsuarioRouter.delete("/:id", (req, res) => {
  (0, _index4.default)().handle(req, res);
});