import { Request, Response, Router } from "express";
import createTipoContacto from "../modules/tipo_contacto/useCases/createTipoContacto";
import deleteTipoContacto from "../modules/tipo_contacto/useCases/deleteTipoContacto";
import getTipoContacto from "../modules/tipo_contacto/useCases/getTipoContacto";
import upDateteTipoContacto from "../modules/tipo_contacto/useCases/upDateteTipoContacto";


const tipoContactoRouter = Router();

tipoContactoRouter.post("/", (req: Request, res: Response) => {
    createTipoContacto().handle(req, res);
})

tipoContactoRouter.get("/", (req: Request, res: Response) => {
    getTipoContacto().handle(req, res);
})

tipoContactoRouter.put("/:id", (req: Request, res: Response) => {
    upDateteTipoContacto().handle(req, res);
})

tipoContactoRouter.delete("/:id", (req: Request, res: Response) => {~
    deleteTipoContacto().handle(req, res);
})

export { tipoContactoRouter };