import { Request, Response } from "express";
import { CreateSessaoUseCase } from "./CreateSessaoUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateSessaoController{
    constructor(
        private createSessaoUseCase: CreateSessaoUseCase
    ){};

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            contacto: Yup.string().required(),
            senha: Yup.string().required(),
        });

        const { contacto, senha } = req.body;

        if (
          !(await esquema.isValid({
            contacto,
            senha,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const resultado = await this.createSessaoUseCase.execute(contacto, senha);

        return res.status(200).json(resultado);
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

export { CreateSessaoController };