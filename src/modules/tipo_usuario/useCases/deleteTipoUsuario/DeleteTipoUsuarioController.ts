import { AppError } from "@errors//AppError";
import { Request, Response } from "express";
import { DeleteTipoUsuarioUseCase } from "./DeleteTipoUsuarioUseCase";


class DeleteTipoUsuarioController{
    constructor(private deleteTipoUsuarioUseCase: DeleteTipoUsuarioUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        try{
            const { id } = req.params;
    
            await this.deleteTipoUsuarioUseCase.execute(id);
    
            return res.status(200).json({ message: "Dado eliminado com sucesso!" });
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

export { DeleteTipoUsuarioController };