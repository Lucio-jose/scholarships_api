"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usuarioRouter = void 0;

var _express = require("express");

var _auth = require("../middlewares/auth");

var _index = _interopRequireDefault(require("../modules/usuario/useCase/createUsuario/index"));

var _deleteUsuario = _interopRequireDefault(require("../modules/usuario/useCase/deleteUsuario"));

var _index2 = _interopRequireDefault(require("../modules/usuario/useCase/getUsuario/index"));

var _index3 = _interopRequireDefault(require("../modules/usuario/useCase/putUsuario/index"));

var _index4 = _interopRequireDefault(require("../modules/usuario/useCase/turnUsuarioAdmin/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usuarioRouter = (0, _express.Router)();
exports.usuarioRouter = usuarioRouter;
const Autentica = new _auth.Autenticacao();
usuarioRouter.post("/:tipoUsuarioId", (req, res) => {
  (0, _index.default)().handle(req, res);
});
usuarioRouter.get("/", Autentica.auth, (req, res) => {
  (0, _index2.default)().handle(req, res);
});
usuarioRouter.put("/:id", (req, res) => {
  (0, _index3.default)().handle(req, res);
});
usuarioRouter.delete("/:id", (req, res) => {
  (0, _deleteUsuario.default)().handle(req, res);
});
usuarioRouter.put("/admin/:id", (req, res) => {
  (0, _index4.default)().handle(req, res);
});