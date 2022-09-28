"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrauRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _Grau = require("../../model/Grau");

class GrauRepository {
  constructor(GrauRepo = _connection.AppDataSource.getRepository(_Grau.Grau)) {
    this.GrauRepo = GrauRepo;
  }

  async criar(designacao) {
    const grau = this.GrauRepo.create({
      designacao
    });
    const salvoGrauo = await this.GrauRepo.save(grau);
    return salvoGrauo;
  }

  async listar() {
    const graus = await this.GrauRepo.find();
    return graus;
  }

  async pegaPorId(id) {
    const grau = await this.GrauRepo.findOne({
      where: {
        id
      }
    });
    return grau;
  }

  async pegaPorDesignacao(designacao) {
    const grau = await this.GrauRepo.findOne({
      where: {
        designacao
      }
    });
    return grau;
  }

  async actualizar(tipoUsuario, {
    designacao
  }) {
    const grau = this.GrauRepo.merge(tipoUsuario, {
      designacao
    });
    const salvoGrau = await this.GrauRepo.save(grau);
    return salvoGrau;
  }

  async deletar(id) {
    const grau = await this.GrauRepo.findOne({
      where: {
        id
      }
    });

    if (!grau) {
      throw new Error("Tipo Usuario não encontrado!");
    }

    await this.GrauRepo.delete(grau.id);
  }

}

exports.GrauRepository = GrauRepository;