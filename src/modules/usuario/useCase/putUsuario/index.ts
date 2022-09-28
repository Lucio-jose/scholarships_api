import { UsuarioRepository } from "../../repositories/implements/UsuarioRepository";
import { PutUsuarioController } from "./PutUsuarioController";
import { PutUsuarioUseCase } from "./PutUsuarioUseCase";


export default (): PutUsuarioController => {
    const usuarioRepository = new UsuarioRepository();
    const putUsuarioUseCase = new PutUsuarioUseCase(usuarioRepository);
    const putUsuarioController = new PutUsuarioController(putUsuarioUseCase);

    return putUsuarioController;
}