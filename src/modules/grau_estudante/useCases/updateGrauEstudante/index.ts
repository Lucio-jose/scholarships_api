import { GrauRepository } from "@modules//grau/repositories/implements/GrauRepository";
import { GrauEstudanteRepository } from "../../repositories/implements/GrauEstudanteRepository";
import { UpdateGrauEstudanteController } from "./UpdateGrauEstudanteController";
import { UpdateGrauEstudanteUseCase } from "./updateGrauEstudanteUseCase";


export default (): UpdateGrauEstudanteController => {
    const grauRepository = new GrauRepository();
    const grauEstudanteRepo = new GrauEstudanteRepository();
    const updateGrauEstudanteUseCase = new UpdateGrauEstudanteUseCase(grauEstudanteRepo, grauRepository);
    const updateGrauEstudanteController = new UpdateGrauEstudanteController(updateGrauEstudanteUseCase);

    return updateGrauEstudanteController;
}