import { UsuarioRepository } from "../../repositories/implements/UsuarioRepository";
import { GetUsuarioController } from "./GetUsuarioController";
import { GetUsuarioUseCase } from "./GetUsuarioUseCase";


export default (): GetUsuarioController => {
    const usuarioRepository = new UsuarioRepository();
    const getUsuarioUseCase = new GetUsuarioUseCase(usuarioRepository)
    const getUsuarioController = new GetUsuarioController(getUsuarioUseCase)

    return getUsuarioController;
}