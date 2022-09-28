import { Request, Response } from "express";
import { UpdateGrauEstudanteUseCase } from "./UpdateGrauEstudanteUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class UpdateGrauEstudanteController{
    
    constructor(private updateGrauEstudanteUseCase: UpdateGrauEstudanteUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try {
        const esquema = Yup.object().shape({
            grauId: Yup.string().required(),
        });

        const { id } = req.params
        const { grauId } = req.body

        if (
          !(await esquema.isValid({
            grauId,
            id
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const grauEstudante = await this.updateGrauEstudanteUseCase.execute(id, grauId );

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

export { UpdateGrauEstudanteController };