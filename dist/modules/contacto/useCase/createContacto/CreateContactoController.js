"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateContactoController = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _AppError = require("../../../../errors/AppError");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CreateContactoController {
  constructor(createContactoUseCase) {
    this.createContactoUseCase = createContactoUseCase;
  }

  async handle(req, res) {
    try {
      const esquema = Yup.object().shape({
        usuarioId: Yup.string().required(),
        tipoContactoId: Yup.string().required(),
        contacto: Yup.string().required()
      });
      const {
        usuarioId
      } = req.params;
      const {
        tipoContactoId,
        contacto
      } = req.body;

      if (!(await esquema.isValid({
        usuarioId,
        tipoContactoId,
        contacto
      }))) {
        throw new _AppError.AppError("Erro na validação. Verifique os dados!", 400);
      }

      const contactoCriado = await this.createContactoUseCase.execute({
        tipoContactoId,
        usuarioId,
        contacto
      });
      return res.status(200).json(contactoCriado);
    } catch (err) {
      if (err instanceof _AppError.AppError) {
        return res.status(err.status).json({
          error: err.message,
          status: err.status
        });
      }

      return res.status(500).json({
        message: err.message,
        status: 500
      });
    }
  }

}

exports.CreateContactoController = CreateContactoController;