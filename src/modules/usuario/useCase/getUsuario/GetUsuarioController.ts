import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetUsuarioUseCase } from "./GetUsuarioUseCase";


class GetUsuarioController{
    constructor(private getUsuarioUseCase: GetUsuarioUseCase){};

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const usuario = await this.getUsuarioUseCase.execute();
    
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
};

export { GetUsuarioController };