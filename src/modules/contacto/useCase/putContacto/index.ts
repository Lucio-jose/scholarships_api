import { ContactoRepository } from "../../repositories/implements/ContactoRepository"
import { PutContactoController } from "./PutContactoController"
import { PutContactoUseCase } from "./PutContactoUseCase";


export default  (): PutContactoController => {
    const contactoRepository = new ContactoRepository();
    const putContactoUseCase = new PutContactoUseCase(contactoRepository);
    const putContactoController = new PutContactoController(putContactoUseCase);

    return putContactoController;
}