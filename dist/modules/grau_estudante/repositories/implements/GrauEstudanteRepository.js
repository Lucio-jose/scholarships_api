"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrauEstudanteRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _GrauEstudante = require("../../model/GrauEstudante");

class GrauEstudanteRepository {
  constructor(grauEstudanteRepo = _connection.AppDataSource.getRepository(_GrauEstudante.GrauEstudante)) {
    this.grauEstudanteRepo = grauEstudanteRepo;
  }

  async criar(grauId, estudanteId) {
    const grauEstudante = this.grauEstudanteRepo.create({
      grauId,
      estudanteId
    });
    const resul = await this.grauEstudanteRepo.save(grauEstudante);
    return resul;
  }

  async atualizar(grauEstudante, {
    grauId,
    grau
  }) {
    const grauEst = this.grauEstudanteRepo.merge(grauEstudante, {
      grauId,
      grau
    });
    const resul = await this.grauEstudanteRepo.save(grauEst);
    return resul;
  }

  async deletar(id) {
    await this.grauEstudanteRepo.delete(id);
  }

  async pegarPorEstudante(estudanteId) {
    const grauEstudante = await this.grauEstudanteRepo.findOne({
      where: {
        estudanteId
      }
    });
    return grauEstudante;
  }

  async pegarPorGrau(grauId) {
    const grauEstudante = await this.grauEstudanteRepo.find({
      where: {
        grauId
      }
    });
    return grauEstudante;
  }

  async pegarUm(id) {
    const grauEst = await this.grauEstudanteRepo.findOne({
      where: {
        id
      }
    });
    return grauEst;
  }

}

exports.GrauEstudanteRepository = GrauEstudanteRepository;