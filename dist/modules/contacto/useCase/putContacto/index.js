"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactoRepository = require("../../repositories/implements/ContactoRepository");

var _PutContactoController = require("./PutContactoController");

var _PutContactoUseCase = require("./PutContactoUseCase");

var _default = () => {
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const putContactoUseCase = new _PutContactoUseCase.PutContactoUseCase(contactoRepository);
  const putContactoController = new _PutContactoController.PutContactoController(putContactoUseCase);
  return putContactoController;
};

exports.default = _default;