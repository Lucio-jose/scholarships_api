import { ContactoRepository } from "../../repositories/implements/ContactoRepository";
import { DeleteContactoController } from "./DeleteContactoController";
import { DeleteContactoUseCase } from "./DeleteContactoUseCase";


export default (): DeleteContactoController => {
    const contactoRepository = new ContactoRepository();
    const deleteContactoUseCase = new DeleteContactoUseCase(contactoRepository);
    const deleteContactoController = new DeleteContactoController(deleteContactoUseCase);

    return deleteContactoController;
};