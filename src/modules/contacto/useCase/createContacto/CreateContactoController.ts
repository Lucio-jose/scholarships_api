import { Request, Response } from "express";
import { CreateContactoUseCase } from "./CreateContactoUseCase";
import * as Yup from "yup"
import { AppError } from "@errors//AppError";


class CreateContactoController{
    constructor(private createContactoUseCase: CreateContactoUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
      try{
        const esquema = Yup.object().shape({
            usuarioId: Yup.string().required(),
            tipoContactoId: Yup.string().required(),
            contacto: Yup.string().required(),
        });

        const { usuarioId } = req.params;
        const { tipoContactoId, contacto } = req.body;

        if (
          !(await esquema.isValid({
            usuarioId,
            tipoContactoId,
            contacto,
          }))
        ) {
          throw new AppError("Erro na validação. Verifique os dados!", 400);
        }

        const contactoCriado = await this.createContactoUseCase.execute({ tipoContactoId, usuarioId, contacto });

        return res.status(200).json(contactoCriado);
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

export { CreateContactoController };