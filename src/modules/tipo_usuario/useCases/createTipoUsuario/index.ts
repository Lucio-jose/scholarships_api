import { TipoUsuarioRepository } from "../../repositories/implements/TipoUsuarioRepository";
import { CreateTipoUsuarioController } from "./CreateTipoUsuarioController";
import { CreateTipoUsuarioUseCase } from "./CreateTipoUsuarioUseCase";


export default(): CreateTipoUsuarioController => {
    const tipoUsuarioRepo = new TipoUsuarioRepository();
    const createTipoUsuarioUseCase = new CreateTipoUsuarioUseCase(tipoUsuarioRepo);
    const createTipoUsuarioController = new CreateTipoUsuarioController(createTipoUsuarioUseCase);

    return createTipoUsuarioController;
}