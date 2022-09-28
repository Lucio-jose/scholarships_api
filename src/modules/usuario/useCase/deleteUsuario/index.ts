import { UsuarioRepository } from "../../repositories/implements/UsuarioRepository";
import { DeleteUsuarioController } from "./DeleteUsuarioController";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";


export default (): DeleteUsuarioController => {
    const usuarioRepo = new UsuarioRepository();
    const deleteUsuarioUseCase = new DeleteUsuarioUseCase(usuarioRepo);
    const deleteUsuarioController = new DeleteUsuarioController(deleteUsuarioUseCase);

    return deleteUsuarioController;
}