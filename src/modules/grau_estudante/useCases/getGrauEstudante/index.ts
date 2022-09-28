import { UsuarioRepository } from "@modules//usuario/repositories/implements/UsuarioRepository";
import { GrauEstudanteRepository } from "../../repositories/implements/GrauEstudanteRepository";
import { GetGrauEstudanteController } from "./GetGrauEstudanteController";
import { GetGrauEstudanteUseCase } from "./GetGrauEstudanteUseCase";


export default (): GetGrauEstudanteController => {
    const grauEstudanteRepository = new GrauEstudanteRepository();
    const estudanteRepository = new UsuarioRepository();
    const getGrauEstudanteUseCase = new GetGrauEstudanteUseCase(grauEstudanteRepository, estudanteRepository);
    const getGrauEstudanteController = new GetGrauEstudanteController(getGrauEstudanteUseCase);

    return getGrauEstudanteController;
}