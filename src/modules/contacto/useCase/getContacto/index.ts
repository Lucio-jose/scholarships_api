import { UsuarioRepository } from "@modules//usuario/repositories/implements/UsuarioRepository";
import { ContactoRepository } from "../../repositories/implements/ContactoRepository";
import { GetContactoController } from "./GetContactoController";
import { GetContactoUseCase } from "./GetContactoUseCase";


export default (): GetContactoController => {
    const contactoRepository = new ContactoRepository();
    const usuarioRepository = new UsuarioRepository();
    const getContactoUseCase = new GetContactoUseCase(contactoRepository, usuarioRepository);
    const getContactoController = new GetContactoController(getContactoUseCase);

    return getContactoController;
}