import { ContactoRepository } from "../../../contacto/repositories/implements/ContactoRepository";
import { LoginRepository } from "../../../login/repositories/implements/LoginRepository";
import { UsuarioRepository } from "../../../usuario/repositories/implements/UsuarioRepository";
import { CreateSessaoController } from "./CreateSessaoController";
import { CreateSessaoUseCase } from "./CreateSessaoUseCase";


export default (): CreateSessaoController => {
    const loginRepository = new LoginRepository();
    const usuarioRepository = new UsuarioRepository();
    const contactoRepository = new ContactoRepository();
    const createSessaoUseCase = new CreateSessaoUseCase(loginRepository, usuarioRepository, contactoRepository);
    const createSessaoController = new CreateSessaoController(createSessaoUseCase);

    return createSessaoController;
}