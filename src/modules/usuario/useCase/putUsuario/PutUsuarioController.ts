import { Request, Response } from "express";
import { PutUsuarioUseCase } from "./PutUsuarioUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class PutUsuarioController{
    constructor(private PutUsuarioUseCase: PutUsuarioUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            id: Yup.string().required(),
            nome: Yup.string().required(),
            sobreNome: Yup.string().required(),
        });

        const { id } = req.params
        const { nome, sobreNome } = req.body

        if (
          !(await esquema.isValid({
            id,
            nome,
            sobreNome,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!");
        }

        const usuario = await this.PutUsuarioUseCase.execute(id, { nome, sobreNome });

        return res.status(200).json(usuario);
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

export { PutUsuarioController };