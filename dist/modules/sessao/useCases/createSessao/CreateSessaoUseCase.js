"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSessaoUseCase = void 0;

var _bcrypt = require("bcrypt");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _AppError = require("../../../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateSessaoUseCase {
  constructor(loginRepository, usuarioRepository, contactoRepository) {
    this.loginRepository = loginRepository;
    this.usuarioRepository = usuarioRepository;
    this.contactoRepository = contactoRepository;
  }

  async execute(contacto, senha) {
    const existeContacto = await this.contactoRepository.pegarPorContacto(contacto);
    if (!existeContacto) throw new _AppError.AppError("Login ou senha inválido!", 400);
    const usuario = await this.usuarioRepository.pegarUm(existeContacto.usuarioId);
    if (!usuario) throw new _AppError.AppError("Login ou senha inválido!", 400);
    const login = await this.loginRepository.getLoginUsuario(usuario.id);
    if (!login) throw new _AppError.AppError("Login ou senha inválido!", 400);
    const senhaValida = (0, _bcrypt.compareSync)(senha, login.senha);
    if (!senhaValida) throw new _AppError.AppError("Login ou senha inválido!", 400);

    const token = _jsonwebtoken.default.sign({
      usuarioId: usuario.id
    }, _auth.default.key, {
      expiresIn: _auth.default.expiresIn
    });

    return {
      token,
      usuario
    };
  }

}

exports.CreateSessaoUseCase = CreateSessaoUseCase;