import { Request, Response } from "express";
import { CreateGrauUseCase } from "./CreateGrauUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateGrauController{
    constructor(private createGrauUseCase: CreateGrauUseCase){}

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

        const grau = await this.createGrauUseCase.execute(designacao);

        return res.status(200).json(grau);
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

export { CreateGrauController };