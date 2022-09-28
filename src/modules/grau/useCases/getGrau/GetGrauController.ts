import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetGrauUseCase } from "./GetGrauUseCase";


class GetGrauController{
    constructor(private getGrauUseCase: GetGrauUseCase){};

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const grau = await this.getGrauUseCase.listarTodos();
    
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
};

export { GetGrauController };