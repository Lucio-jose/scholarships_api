import { Router } from "express";
import { Autenticacao } from "../middlewares/auth";
import createUsuarioController from "../modules/usuario/useCase/createUsuario/index";
import deleteUsuarioController from "../modules/usuario/useCase/deleteUsuario";
import GetUsuarioController from "../modules/usuario/useCase/getUsuario/index";
import PutUsuarioController from "../modules/usuario/useCase/putUsuario/index";
import turnUsuarioAdminController from "../modules/usuario/useCase/turnUsuarioAdmin/index"


const usuarioRouter = Router();
const Autentica = new Autenticacao();

usuarioRouter.post("/:tipoUsuarioId", (req, res) => {
    createUsuarioController().handle(req, res);
})

usuarioRouter.get("/", Autentica.auth, (req, res) => {
    GetUsuarioController().handle(req, res)
})

usuarioRouter.put("/:id", (req, res) => {
    PutUsuarioController().handle(req, res);
})

usuarioRouter.delete("/:id", (req, res) => {
    deleteUsuarioController().handle(req, res);
})

usuarioRouter.put("/admin/:id", (req, res) => {
    turnUsuarioAdminController().handle(req, res);
})

export { usuarioRouter };