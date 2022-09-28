import { Request, Response, Router } from "express";
import CreateTipoUsuarioController  from "../modules/tipo_usuario/useCases/createTipoUsuario/index";
import GetTipoUsuarioController from "../modules/tipo_usuario/useCases/getTipoUsuario/index";
import UpdateTipoUsuarioController from "../modules/tipo_usuario/useCases/updateTipoUsuario/index";
import DeleteTipoUsuarioController from "../modules/tipo_usuario/useCases/deleteTipoUsuario/index";


const tipoUsuarioRouter = Router();

tipoUsuarioRouter.post("/", (req: Request, res: Response) => {
    CreateTipoUsuarioController().handle(req, res);
})

tipoUsuarioRouter.get("/", (req: Request, res: Response) => {
    GetTipoUsuarioController().handle(req, res);
})

tipoUsuarioRouter.put("/:id", (req: Request, res: Response) => {
    UpdateTipoUsuarioController().handle(req, res);
})

tipoUsuarioRouter.delete("/:id", (req: Request, res: Response) => {
    DeleteTipoUsuarioController().handle(req, res);
})

export { tipoUsuarioRouter };