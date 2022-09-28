import { TipoUsuarioRepository } from "../../repositories/implements/TipoUsuarioRepository";
import { GetTipoUsuarioController } from "./GetTipoUsuarioController";
import { GetTipoUsuarioUseCase } from "./GetTipoUsuarioUseCase";


export default(): GetTipoUsuarioController => {
    const tipoUsuarioRepo = new TipoUsuarioRepository();
    const getTipoUsuarioUseCase = new GetTipoUsuarioUseCase(tipoUsuarioRepo);
    const getTipoUsuarioController = new GetTipoUsuarioController(getTipoUsuarioUseCase)

    return getTipoUsuarioController;
}