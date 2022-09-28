"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PutContactoController = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _AppError = require("../../../../errors/AppError");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class PutContactoController {
  constructor(putContactoUseCase) {
    this.putContactoUseCase = putContactoUseCase;
  }

  async handle(req, res) {
    try {
      const esquema = Yup.object().shape({
        id: Yup.string().required(),
        contacto: Yup.string().required()
      });
      const {
        id
      } = req.params;
      const {
        contacto
      } = req.body;

      if (!(await esquema.isValid({
        id,
        contacto
      }))) {
        throw new _AppError.AppError("Erro na validação. Verifique os dados!", 400);
      }

      const execute = await this.putContactoUseCase.execute(id, contacto);
      return res.status(200).json(execute);
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

exports.PutContactoController = PutContactoController;