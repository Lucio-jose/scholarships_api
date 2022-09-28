"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoUsuarioRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _TipoUsuario = require("../../model/TipoUsuario");

class TipoUsuarioRepository {
  constructor(TipoUsuarioRepo = _connection.AppDataSource.getRepository(_TipoUsuario.TipoUsuario)) {
    this.TipoUsuarioRepo = TipoUsuarioRepo;
  }

  async criar(designacao) {
    const tipoUsuario = this.TipoUsuarioRepo.create({
      designacao
    });
    const salvoTipoUsuario = await this.TipoUsuarioRepo.save(tipoUsuario);
    return salvoTipoUsuario;
  }

  async listar() {
    const tipoUsuarios = await this.TipoUsuarioRepo.find();
    return tipoUsuarios;
  }

  async pegaPorId(id) {
    const tipoUsuario = await this.TipoUsuarioRepo.findOne({
      where: {
        id
      }
    });
    return tipoUsuario;
  }

  async pegaPorDesignacao(designacao) {
    const tipoUsuario = await this.TipoUsuarioRepo.findOne({
      where: {
        designacao
      }
    });
    return tipoUsuario;
  }

  async actualizar(tipoUsuario, {
    designacao
  }) {
    const tipoActualizado = this.TipoUsuarioRepo.merge(tipoUsuario, {
      designacao
    });
    const salvoTipoUsuario = await this.TipoUsuarioRepo.save(tipoActualizado);
    return salvoTipoUsuario;
  }

  async deletar(id) {
    const apagarTipoUsuario = await this.TipoUsuarioRepo.findOne({
      where: {
        id
      }
    });

    if (!apagarTipoUsuario) {
      throw new Error("Tipo Usuario não encontrado!");
    }

    await this.TipoUsuarioRepo.delete(apagarTipoUsuario.id);
  }

}

exports.TipoUsuarioRepository = TipoUsuarioRepository;