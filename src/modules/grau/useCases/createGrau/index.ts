import { GrauRepository } from "../../repositories/implements/GrauRepository";
import { CreateGrauController } from "./CreateGrauController";
import { CreateGrauUseCase } from "./createGrauUseCase";


export default(): CreateGrauController => {
    const grauRepo = new GrauRepository();
    const createGrauUseCase = new CreateGrauUseCase(grauRepo);
    const createGrauController = new CreateGrauController(createGrauUseCase);

    return createGrauController;
}