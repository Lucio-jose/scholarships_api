"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tipoContactoRouter = void 0;

var _express = require("express");

var _createTipoContacto = _interopRequireDefault(require("../modules/tipo_contacto/useCases/createTipoContacto"));

var _deleteTipoContacto = _interopRequireDefault(require("../modules/tipo_contacto/useCases/deleteTipoContacto"));

var _getTipoContacto = _interopRequireDefault(require("../modules/tipo_contacto/useCases/getTipoContacto"));

var _upDateteTipoContacto = _interopRequireDefault(require("../modules/tipo_contacto/useCases/upDateteTipoContacto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tipoContactoRouter = (0, _express.Router)();
exports.tipoContactoRouter = tipoContactoRouter;
tipoContactoRouter.post("/", (req, res) => {
  (0, _createTipoContacto.default)().handle(req, res);
});
tipoContactoRouter.get("/", (req, res) => {
  (0, _getTipoContacto.default)().handle(req, res);
});
tipoContactoRouter.put("/:id", (req, res) => {
  (0, _upDateteTipoContacto.default)().handle(req, res);
});
tipoContactoRouter.delete("/:id", (req, res) => {
  ~(0, _deleteTipoContacto.default)().handle(req, res);
});