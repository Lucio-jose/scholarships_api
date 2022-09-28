import { TipoUsuarioRepository } from "../../repositories/implements/TipoUsuarioRepository";
import { DeleteTipoUsuarioController } from "./DeleteTipoUsuarioController";
import { DeleteTipoUsuarioUseCase } from "./DeleteTipoUsuarioUseCase";


export default (): DeleteTipoUsuarioController => {
    const tipoUsuarioRepo = new TipoUsuarioRepository();
    const deleteTipoUsuarioUseCase = new DeleteTipoUsuarioUseCase(tipoUsuarioRepo);
    const deleteTipoUsuarioController = new DeleteTipoUsuarioController(deleteTipoUsuarioUseCase);

    return deleteTipoUsuarioController;
}