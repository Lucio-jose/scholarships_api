import { GrauRepository } from "../../repositories/implements/GrauRepository";
import { GetGrauController } from "./GetGrauController";
import { GetGrauUseCase } from "./GetGrauUseCase";


export default(): GetGrauController => {
    const grauRepo = new GrauRepository();
    const getGrauUseCase = new GetGrauUseCase(grauRepo);
    const getGrauController = new GetGrauController(getGrauUseCase)

    return getGrauController;
}