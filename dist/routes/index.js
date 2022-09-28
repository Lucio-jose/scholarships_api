"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _contacto = require("./contacto.routes");

var _grau = require("./grau.routes");

var _grauEstudante = require("./grauEstudante.routes");

var _login = require("./login.routes");

var _sessao = require("./sessao.routes");

var _tipoContacto = require("./tipoContacto.routes");

var _tipoUsuario = require("./tipoUsuario.routes");

var _usuario = require("./usuario.routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.use("/tipoUsuario", _tipoUsuario.tipoUsuarioRouter);
routes.use("/tipoContacto", _tipoContacto.tipoContactoRouter);
routes.use("/usuario", _usuario.usuarioRouter);
routes.use("/contacto", _contacto.contactoRouter);
routes.use("/login", _login.loginRouter);
routes.use("/sessao", _sessao.sessaoRouter);
routes.use("/grau", _grau.grauRouter);
routes.use("/grauEstudante", _grauEstudante.grauEstudanteRouter);