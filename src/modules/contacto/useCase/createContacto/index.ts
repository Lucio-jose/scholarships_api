import { TipoContactoRepository } from "@modules//tipo_contacto/repositories/implements/TipoContactoRepository";
import { UsuarioRepository } from "@modules//usuario/repositories/implements/UsuarioRepository";
import { ContactoRepository } from "../../repositories/implements/ContactoRepository";
import { CreateContactoController } from "./CreateContactoController";
import { CreateContactoUseCase } from "./CreateContactoUseCase";


export default (): CreateContactoController => {
    const usuarioRepository = new UsuarioRepository();
    const tipoContactoRepo = new TipoContactoRepository();
    const contactoRepo = new ContactoRepository();
    const createContactoUseCase = new CreateContactoUseCase(contactoRepo, usuarioRepository, tipoContactoRepo);

    const createContactoController = new CreateContactoController(createContactoUseCase);

    return createContactoController;
}