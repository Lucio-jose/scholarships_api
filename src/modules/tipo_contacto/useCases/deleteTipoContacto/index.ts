import { TipoContactoRepository } from "../../repositories/implements/TipoContactoRepository";
import { DeleteTipoContactoController } from "./DeleteTipoContactoController";
import { DeleteTipoContactoUseCase } from "./DeleteTipoContactoUseCase";


export default (): DeleteTipoContactoController => {
    const tipoContactoRepo = new TipoContactoRepository();
    const deleteTipoContactoUseCase = new DeleteTipoContactoUseCase(tipoContactoRepo);
    const deleteTipoContactoController = new DeleteTipoContactoController(deleteTipoContactoUseCase);

    return deleteTipoContactoController;
}