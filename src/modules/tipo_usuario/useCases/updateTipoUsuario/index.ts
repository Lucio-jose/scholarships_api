import { TipoUsuarioRepository } from "../../repositories/implements/TipoUsuarioRepository";
import { UpdateTipoUsuarioController } from "./UpdateTipoUsuarioController";
import { UpdateTipoUsuarioUseCase } from "./UpdateTipoUsuarioUseCase";


export default (): UpdateTipoUsuarioController => {
    const tipoUsuarioRepo = new TipoUsuarioRepository();
    const updateTipoUsuarioUseCase = new UpdateTipoUsuarioUseCase(tipoUsuarioRepo);
    const updateTipoUsuarioController = new UpdateTipoUsuarioController(updateTipoUsuarioUseCase);

    return updateTipoUsuarioController;
}