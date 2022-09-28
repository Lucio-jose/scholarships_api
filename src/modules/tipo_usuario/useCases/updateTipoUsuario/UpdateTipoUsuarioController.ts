import { Request, Response } from "express";
import { UpdateTipoUsuarioUseCase } from "./UpdateTipoUsuarioUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class UpdateTipoUsuarioController{
    constructor(private updateTipoUsuarioUseCase: UpdateTipoUsuarioUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try {
        const esquema = Yup.object().shape({
            designacao: Yup.string().required(),
            id: Yup.string().required(),
        });

        const { id } = req.params
        const { designacao } = req.body

        if (
          !(await esquema.isValid({
            designacao,
            id
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const tipoUsuario = await this.updateTipoUsuarioUseCase.execute(id, { designacao });

        return res.status(200).json(tipoUsuario);
      } catch(err){
        if( err instanceof AppError){
          return res.status(err.status).json({
            error: err.message,
            status: err.status
          })
        } 
          
        return res.status(500).json({
          message: err.message,
          status: 500
        })
    }
  }
}

export { UpdateTipoUsuarioController };