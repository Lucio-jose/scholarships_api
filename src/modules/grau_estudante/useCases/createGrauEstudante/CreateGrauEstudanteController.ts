import { Request, Response } from "express";
import { CreateGrauEstudanteUseCase } from "./CreateGrauEstudanteUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateGrauEstudanteController{
    constructor(private CreateGrauEstudanteUseCase: CreateGrauEstudanteUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            estudanteId: Yup.string().required(),
            grauId: Yup.string().required(),
        });

        const { estudanteId, grauId } = req.body;

        if (
          !(await esquema.isValid({
            estudanteId,
            grauId,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const grauEstudante = await this.CreateGrauEstudanteUseCase.execute(grauId, estudanteId);

        return res.status(200).json(grauEstudante);
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

export { CreateGrauEstudanteController };