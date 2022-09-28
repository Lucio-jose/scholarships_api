import { Router } from "express";
import { contactoRouter } from "./contacto.routes";
import { grauRouter } from "./grau.routes";
import { grauEstudanteRouter } from "./grauEstudante.routes";
import { loginRouter } from "./login.routes";
import { sessaoRouter } from "./sessao.routes";
import { tipoContactoRouter } from "./tipoContacto.routes";
import { tipoUsuarioRouter } from "./tipoUsuario.routes";
import { usuarioRouter } from "./usuario.routes";


const routes = Router();

routes.use("/tipoUsuario", tipoUsuarioRouter);
routes.use("/tipoContacto", tipoContactoRouter);
routes.use("/usuario", usuarioRouter);
routes.use("/contacto", contactoRouter);
routes.use("/login", loginRouter);
routes.use("/sessao", sessaoRouter);
routes.use("/grau", grauRouter);
routes.use("/grauEstudante", grauEstudanteRouter);

export { routes };