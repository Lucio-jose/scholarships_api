import { TipoContactoRepository } from "../../repositories/implements/TipoContactoRepository";
import { UpdateTipoContactoController } from "./UpdateTipoContactoController";
import { UpdateTipoContactoUseCase } from "./UpdateTipoContactoUseCase";


export default (): UpdateTipoContactoController => {
    const tipoContactoRepo = new TipoContactoRepository();
    const updateTipoContactoUseCase = new UpdateTipoContactoUseCase(tipoContactoRepo);
    const updateTipoContactoController = new UpdateTipoContactoController(updateTipoContactoUseCase);

    return updateTipoContactoController;
}