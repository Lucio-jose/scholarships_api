"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsuarioController = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _AppError = require("../../../../errors/AppError");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class CreateUsuarioController {
  constructor(createUsuarioUseCase) {
    this.createUsuarioUseCase = createUsuarioUseCase;
  }

  async handle(req, res) {
    try {
      const esquema = Yup.object().shape({
        tipoUsuarioId: Yup.string().required(),
        nome: Yup.string().required(),
        sobreNome: Yup.string().required(),
        dataNascimento: Yup.string().required()
      });
      const {
        tipoUsuarioId
      } = req.params;
      const {
        nome,
        sobreNome,
        dataNascimento
      } = req.body;

      if (!(await esquema.isValid({
        tipoUsuarioId,
        nome,
        sobreNome,
        dataNascimento
      }))) {
        throw new _AppError.AppError("Erro na validação. Verifique os dados!", 400);
      }

      const usuario = await this.createUsuarioUseCase.execute({
        nome,
        sobreNome,
        dataNascimento,
        tipoUsuarioId
      });
      return res.status(200).json(usuario);
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

exports.CreateUsuarioController = CreateUsuarioController;