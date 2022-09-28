import { TipoContactoRepository } from "../../repositories/implements/TipoContactoRepository";
import { GetTipoContactoController } from "./GetTipoContactoController";
import { GetTipoContactoUseCase } from "./GetTipoContactoUseCase";


export default(): GetTipoContactoController => {
    const tipoContactoRepo = new TipoContactoRepository();
    const getTipoContactoUseCase = new GetTipoContactoUseCase(tipoContactoRepo);
    const getTipoContactoController = new GetTipoContactoController(getTipoContactoUseCase)

    return getTipoContactoController;
}