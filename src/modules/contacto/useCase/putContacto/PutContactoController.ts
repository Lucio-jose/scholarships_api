import { Request, Response } from "express";
import { Contacto } from "../../model/Contacto";
import { PutContactoUseCase } from "./PutContactoUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class PutContactoController{
    constructor(
        private putContactoUseCase: PutContactoUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            id: Yup.string().required(),
            contacto: Yup.string().required(),
        });

        const { id } = req.params;
        const { contacto } = req.body;

        if (
          !(await esquema.isValid({
            id,
            contacto,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const execute = await this.putContactoUseCase.execute(id, contacto);

        return res.status(200).json(execute);
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

export { PutContactoController };