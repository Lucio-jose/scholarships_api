"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactoRouter = void 0;

var _express = require("express");

var _createContacto = _interopRequireDefault(require("../modules/contacto/useCase/createContacto"));

var _deleteContacto = _interopRequireDefault(require("../modules/contacto/useCase/deleteContacto"));

var _getContacto = _interopRequireDefault(require("../modules/contacto/useCase/getContacto"));

var _putContacto = _interopRequireDefault(require("../modules/contacto/useCase/putContacto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contactoRouter = (0, _express.Router)();
exports.contactoRouter = contactoRouter;
contactoRouter.post("/:usuarioId", (req, res) => {
  (0, _createContacto.default)().handle(req, res);
});
contactoRouter.get("/:usuarioId", (req, res) => {
  (0, _getContacto.default)().handle(req, res);
});
contactoRouter.put("/:id", (req, res) => {
  (0, _putContacto.default)().handle(req, res);
});
contactoRouter.delete("/:id", (req, res) => {
  (0, _deleteContacto.default)().handle(req, res);
});