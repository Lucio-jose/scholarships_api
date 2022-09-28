"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactoRepository = require("../../repositories/implements/ContactoRepository");

var _DeleteContactoController = require("./DeleteContactoController");

var _DeleteContactoUseCase = require("./DeleteContactoUseCase");

var _default = () => {
  const contactoRepository = new _ContactoRepository.ContactoRepository();
  const deleteContactoUseCase = new _DeleteContactoUseCase.DeleteContactoUseCase(contactoRepository);
  const deleteContactoController = new _DeleteContactoController.DeleteContactoController(deleteContactoUseCase);
  return deleteContactoController;
};

exports.default = _default;