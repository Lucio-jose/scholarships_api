import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetEstudanteGrauUseCase } from "./GetEstudanteGrauUseCase";


class GetEstudanteGrauController{
    constructor(
        private getEstudanteGrauUseCase: GetEstudanteGrauUseCase
    ){}

    async handle(req: Request, res:Response): Promise<Response>{
        try{
            const { grauId } = req.params;
    
            const grauEstudante = await this.getEstudanteGrauUseCase.execute(grauId);
    
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
};

export { GetEstudanteGrauController };