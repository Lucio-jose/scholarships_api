import { TipoContactoRepository } from "../../repositories/implements/TipoContactoRepository";
import { CreateTipoContactoController } from "./CreateTipoContactoController";
import { CreateTipoContactoUseCase } from "./CreateTipoContactoUseCase";


export default(): CreateTipoContactoController => {
    const tipoContactoRepo = new TipoContactoRepository();
    const createTipoContactoUseCase = new CreateTipoContactoUseCase(tipoContactoRepo);
    const createTipoContactoController = new CreateTipoContactoController(createTipoContactoUseCase);

    return createTipoContactoController;
}