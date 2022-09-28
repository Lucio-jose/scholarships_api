"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuarioRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _TipoUsuarioRepository = require("../../../tipo_usuario/repositories/implements/TipoUsuarioRepository");

var _Usuario = require("../../model/Usuario");

class UsuarioRepository {
  constructor(usuarioRepository = _connection.AppDataSource.getRepository(_Usuario.Usuario), tipoUsuarioRepo = new _TipoUsuarioRepository.TipoUsuarioRepository()) {
    this.usuarioRepository = usuarioRepository;
    this.tipoUsuarioRepo = tipoUsuarioRepo;
  }

  async criar({
    nome,
    sobreNome,
    dataNascimento,
    tipoUsuarioId
  }) {
    const criarUsuario = this.usuarioRepository.create({
      nome,
      sobreNome,
      tipoUsuarioId,
      dataNascimento
    });
    const usuario = await this.usuarioRepository.save(criarUsuario);
    return usuario;
  }

  async listar() {
    const usuarios = await this.usuarioRepository.find();
    return usuarios;
  }

  async pegarUm(id) {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id
      }
    });
    return usuario;
  }

  async atualizar(usuario, {
    nome,
    sobreNome
  }) {
    const usuarioActualizado = this.usuarioRepository.merge(usuario, {
      nome,
      sobreNome
    });
    const salvoUsuario = await this.usuarioRepository.save(usuarioActualizado);
    return salvoUsuario;
  }

  async deletar(id) {
    const apagarUsuario = await this.usuarioRepository.findOne({
      where: {
        id
      }
    });

    if (!apagarUsuario) {
      throw new Error("Usuario não encontrado!");
    }

    await this.usuarioRepository.delete(apagarUsuario.id);
  }

  async turnUsuarioAdmin(usuario) {
    const tipoUsuario = await this.tipoUsuarioRepo.pegaPorDesignacao("Administrador");
    if (!tipoUsuario) throw new Error("TipoUsuário não existe!");
    const usuarioActualizado = this.usuarioRepository.merge(usuario, {
      tipoUsuarioId: tipoUsuario.id,
      tipoUsuario
    });
    const salvoUsuario = await this.usuarioRepository.save(usuarioActualizado);
    return salvoUsuario;
  }

}

exports.UsuarioRepository = UsuarioRepository;
;