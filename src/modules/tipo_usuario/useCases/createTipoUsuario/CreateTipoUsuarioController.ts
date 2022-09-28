import { Request, Response } from "express";
import { CreateTipoUsuarioUseCase } from "./CreateTipoUsuarioUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateTipoUsuarioController{
    constructor(private createTipoUsuarioUseCase: CreateTipoUsuarioUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            designacao: Yup.string().required(),
        });
        
        const { designacao } = req.body;

        if (
          !(await esquema.isValid({
            designacao
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const tipoUsuario = await this.createTipoUsuarioUseCase.execute(designacao);

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

export { CreateTipoUsuarioController };