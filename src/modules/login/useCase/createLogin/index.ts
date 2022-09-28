import { ContactoRepository } from "@modules//contacto/repositories/implements/ContactoRepository";
import { UsuarioRepository } from "@modules//usuario/repositories/implements/UsuarioRepository";
import { LoginRepository } from "../../repositories/implements/LoginRepository";
import { CreateLoginController } from "./CreateLoginController";
import { CreateLoginUseCase } from "./CreateLoginUseCase";


export default (): CreateLoginController => {
    const loginRepository = new LoginRepository();
    const usuarioRepository = new UsuarioRepository();
    const contactoRepository = new ContactoRepository();
    const createLoginUseCase = new CreateLoginUseCase(loginRepository, usuarioRepository, contactoRepository);
    const createLoginController = new CreateLoginController(createLoginUseCase);

    return createLoginController;
}