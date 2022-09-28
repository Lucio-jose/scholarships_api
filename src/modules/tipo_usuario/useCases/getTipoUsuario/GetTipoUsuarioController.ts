import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetTipoUsuarioUseCase } from "./GetTipoUsuarioUseCase";


class GetTipoUsuarioController{
    constructor(private getTipoUsuarioUseCase: GetTipoUsuarioUseCase){};

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const tipoUsuario = await this.getTipoUsuarioUseCase.listarTodos();
    
            return res.status(200).json(tipoUsuario);
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

export { GetTipoUsuarioController };