"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoContactoRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _TipoContacto = require("../../model/TipoContacto");

class TipoContactoRepository {
  constructor(TipoContactoRepo = _connection.AppDataSource.getRepository(_TipoContacto.TipoContacto)) {
    this.TipoContactoRepo = TipoContactoRepo;
  }

  async criar(designacao) {
    const tipoContacto = this.TipoContactoRepo.create({
      designacao
    });
    const salvoTipoContacto = await this.TipoContactoRepo.save(tipoContacto);
    return salvoTipoContacto;
  }

  async listar() {
    const tipoContactos = await this.TipoContactoRepo.find();
    return tipoContactos;
  }

  async pegaPorId(id) {
    const tipoContacto = await this.TipoContactoRepo.findOne({
      where: {
        id
      }
    });
    return tipoContacto;
  }

  async pegaPorDesignacao(designacao) {
    const tipoContacto = await this.TipoContactoRepo.findOne({
      where: {
        designacao
      }
    });
    return tipoContacto;
  }

  async actualizar(tipoContacto, {
    designacao
  }) {
    const tipoActualizado = this.TipoContactoRepo.merge(tipoContacto, {
      designacao
    });
    const salvoTipoContacto = await this.TipoContactoRepo.save(tipoActualizado);
    return salvoTipoContacto;
  }

  async deletar(id) {
    const apagarTipoContacto = await this.TipoContactoRepo.findOne({
      where: {
        id
      }
    });

    if (!apagarTipoContacto) {
      throw new Error("Tipo Contacto não encontrado!");
    }

    await this.TipoContactoRepo.delete(apagarTipoContacto.id);
  }

}

exports.TipoContactoRepository = TipoContactoRepository;