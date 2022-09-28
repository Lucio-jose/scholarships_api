import { GrauRepository } from "../../../grau/repositories/implements/GrauRepository";
import { UsuarioRepository } from "../../../usuario/repositories/implements/UsuarioRepository";
import { GrauEstudanteRepository } from "../../repositories/implements/GrauEstudanteRepository";
import { CreateGrauEstudanteController } from "./CreateGrauEstudanteController";
import { CreateGrauEstudanteUseCase } from "./CreateGrauEstudanteUseCase";


export default (): CreateGrauEstudanteController => {
    const estudanteRepository = new UsuarioRepository();
    const grauRepo = new GrauRepository()
    const grauEstudanteRepo = new GrauEstudanteRepository();
    const createGrauEstudanteUseCase = new CreateGrauEstudanteUseCase(
        grauEstudanteRepo, estudanteRepository, grauRepo
    );

    const createGrauEstudanteController = new CreateGrauEstudanteController(createGrauEstudanteUseCase);

    return createGrauEstudanteController;
}