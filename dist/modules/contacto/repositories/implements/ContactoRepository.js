"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactoRepository = void 0;

var _connection = require("../../../../dataSource/connection");

var _Contacto = require("../../model/Contacto");

class ContactoRepository {
  constructor(contactoRepository = _connection.AppDataSource.getRepository(_Contacto.Contacto)) {
    this.contactoRepository = contactoRepository;
  }

  async criar({
    contacto,
    usuarioId,
    tipoContactoId
  }) {
    const data = this.contactoRepository.create({
      contacto,
      usuarioId,
      tipoContactoId
    });
    const contactoSalvo = await this.contactoRepository.save(data);
    return contactoSalvo;
  }

  async listar(usuarioId) {
    const contactos = await this.contactoRepository.find({
      where: {
        usuarioId
      }
    });
    return contactos;
  }

  async atualizar(cont, {
    contacto
  }) {
    const contactoActualizado = this.contactoRepository.merge(cont, {
      contacto
    });
    const contactoSalvo = await this.contactoRepository.save(contactoActualizado);
    return contactoSalvo;
  }

  async deletar(id) {
    const apagarContacto = await this.contactoRepository.findOne({
      where: {
        id
      }
    });

    if (!apagarContacto) {
      throw new Error("Usuario não encontrado!");
    }

    await this.contactoRepository.delete(apagarContacto.id);
  }

  async pegarUm(id) {
    const contacto = await this.contactoRepository.findOne({
      where: {
        id
      }
    });
    return contacto;
  }

  async pegarPorContacto(contacto) {
    const resul = await this.contactoRepository.findOne({
      where: {
        contacto
      }
    });
    return resul;
  }

}

exports.ContactoRepository = ContactoRepository;