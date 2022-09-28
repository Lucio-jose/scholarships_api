import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { TurnUsuarioAdminUseCase } from "./TurnUsuarioAdminUseCase";


class TurnUsuarioAdminController{
    constructor(
        private turnUsuarioAdminUse: TurnUsuarioAdminUseCase
    ){};

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const { id } = req.params;
    
            const usuario = await this.turnUsuarioAdminUse.execute(id)
    
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

export { TurnUsuarioAdminController };