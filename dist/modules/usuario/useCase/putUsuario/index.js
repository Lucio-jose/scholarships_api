"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UsuarioRepository = require("../../repositories/implements/UsuarioRepository");

var _PutUsuarioController = require("./PutUsuarioController");

var _PutUsuarioUseCase = require("./PutUsuarioUseCase");

var _default = () => {
  const usuarioRepository = new _UsuarioRepository.UsuarioRepository();
  const putUsuarioUseCase = new _PutUsuarioUseCase.PutUsuarioUseCase(usuarioRepository);
  const putUsuarioController = new _PutUsuarioController.PutUsuarioController(putUsuarioUseCase);
  return putUsuarioController;
};

exports.default = _default;