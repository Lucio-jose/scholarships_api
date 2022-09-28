import { TipoUsuarioRepository } from "@modules//tipo_usuario/repositories/implements/TipoUsuarioRepository";
import { UsuarioRepository } from "../../repositories/implements/UsuarioRepository";
import { CreateUsuarioController } from "./CreateUsuarioController";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";


export default (): CreateUsuarioController => {
    const usuarioRepository = new UsuarioRepository();
    const tipoUsuarioRepo = new TipoUsuarioRepository();
    const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository, tipoUsuarioRepo);
    const createUsuarioController = new CreateUsuarioController(createUsuarioUseCase);

    return createUsuarioController;
}