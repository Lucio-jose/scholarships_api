import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetTipoContactoUseCase } from "./GetTipoContactoUseCase";


class GetTipoContactoController{
    constructor(private getTipoContactoUseCase: GetTipoContactoUseCase){};

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const tipoContacto = await this.getTipoContactoUseCase.listarTodos();
    
            return res.status(200).json(tipoContacto);
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

export { GetTipoContactoController };