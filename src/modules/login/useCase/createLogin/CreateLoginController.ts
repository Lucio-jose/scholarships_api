import { Request, Response } from "express";
import { CreateLoginUseCase } from "./CreateLoginUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateLoginController{
    constructor(
        private createLoginUseCase: CreateLoginUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            usuarioId: Yup.string().required(),
            contactoId: Yup.string().required(),
            senha: Yup.string().required(),
        });
        
        const { senha, usuarioId, contactoId } = req.body;

        if (
          !(await esquema.isValid({
            usuarioId,
            contactoId,
            senha,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const login = await this.createLoginUseCase.execute({ senha, usuarioId, contactoId });

        return res.status(201).json(login);
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

export { CreateLoginController };