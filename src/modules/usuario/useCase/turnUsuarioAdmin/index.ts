import { UsuarioRepository } from "../../repositories/implements/UsuarioRepository";
import { TurnUsuarioAdminController } from "./TurnUsuarioAdminController";
import { TurnUsuarioAdminUseCase } from "./TurnUsuarioAdminUseCase";


export default (): TurnUsuarioAdminController => {
    const usuarioRepo = new UsuarioRepository();
    const turnUsuarioAdminUseCase = new TurnUsuarioAdminUseCase(usuarioRepo);
    const turnUsuarioAdminController = new TurnUsuarioAdminController(turnUsuarioAdminUseCase);

    return turnUsuarioAdminController;
}