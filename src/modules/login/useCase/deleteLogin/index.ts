import { ContactoRepository } from "@modules//contacto/repositories/implements/ContactoRepository";
import { UsuarioRepository } from "@modules//usuario/repositories/implements/UsuarioRepository";
import { LoginRepository } from "../../repositories/implements/LoginRepository";
import { DeleteLoginController } from "./DeleteLoginController";
import { DeleteLoginUseCase } from "./deleteLoginUseCase";


export default (): DeleteLoginController => {
    const loginRepository = new LoginRepository();
    const usuarioRepository = new UsuarioRepository();
    const contactoRepository = new ContactoRepository();
    const deleteLoginUseCase = new DeleteLoginUseCase(loginRepository);
    const deleteLoginController = new DeleteLoginController(deleteLoginUseCase);

    return deleteLoginController;
}