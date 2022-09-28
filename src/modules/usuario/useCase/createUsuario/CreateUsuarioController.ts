import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateUsuarioController{
    constructor(private createUsuarioUseCase: CreateUsuarioUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            tipoUsuarioId: Yup.string().required(),
            nome: Yup.string().required(),
            sobreNome: Yup.string().required(),
            dataNascimento: Yup.string().required(),
        });

        const { tipoUsuarioId } = req.params;
        const { nome, sobreNome, dataNascimento } = req.body;

        if (
          !(await esquema.isValid({
            tipoUsuarioId,
            nome,
            sobreNome,
            dataNascimento
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const usuario = await this.createUsuarioUseCase.execute({ nome, sobreNome, dataNascimento, tipoUsuarioId});

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

export { CreateUsuarioController };