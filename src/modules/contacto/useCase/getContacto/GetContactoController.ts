import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { GetContactoUseCase } from "./GetContactoUseCase";


class GetContactoController{
    constructor(
        private getContactoUseCase: GetContactoUseCase
    ){}

    async handle(req: Request, res:Response): Promise<Response>{
        try{
            const { usuarioId } = req.params;
    
            const contactos = await this.getContactoUseCase.execute(usuarioId)
    
            return res.status(200).json(contactos);
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

export { GetContactoController };