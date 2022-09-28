"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _Login = require("../../model/Login");

class LoginRepository {
  constructor(loginRepository = _connection.AppDataSource.getRepository(_Login.Login)) {
    this.loginRepository = loginRepository;
  }

  async criar({
    senha,
    usuarioId,
    contactoId
  }) {
    const login = this.loginRepository.create({
      senha,
      usuarioId,
      contactoId
    });
    const retorno = await this.loginRepository.save(login);
    return retorno;
  }

  async deletar(id) {
    await this.loginRepository.delete(id);
  }

  async getLoginContacto(contactoId) {
    const login = await this.loginRepository.findOne({
      where: {
        contactoId
      }
    });
    return login;
  }

  async getLoginUsuario(usuarioId) {
    const login = await this.loginRepository.findOne({
      where: {
        usuarioId
      }
    });
    return login;
  }

  async pegarUm(id) {
    const login = await this.loginRepository.findOne({
      where: {
        id
      }
    });
    return login;
  }

}

exports.LoginRepository = LoginRepository;