import { GrauRepository } from "@modules//grau/repositories/implements/GrauRepository";
import { GrauEstudanteRepository } from "../../repositories/implements/GrauEstudanteRepository";
import { GetEstudanteGrauController } from "./GetEstudanteGrauController";
import { GetEstudanteGrauUseCase } from "./GetEstudanteGrauUseCase";


export default (): GetEstudanteGrauController => {
    const estudantegrauRepository = new GrauEstudanteRepository();
    const grauRepository = new GrauRepository();
    const getEstudanteGrauUseCase = new GetEstudanteGrauUseCase(estudantegrauRepository, grauRepository);
    const getEstudanteGrauController = new GetEstudanteGrauController(getEstudanteGrauUseCase);

    return getEstudanteGrauController;
}