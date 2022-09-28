import { GrauRepository } from "../../repositories/implements/GrauRepository";
import { UpdateGrauController } from "./UpdateGrauController";
import { UpdateGrauUseCase } from "./UpdateGrauUseCase";


export default (): UpdateGrauController => {
    const grauRepo = new GrauRepository();
    const updateGrauUseCase = new UpdateGrauUseCase(grauRepo);
    const updateGrauController = new UpdateGrauController(updateGrauUseCase);

    return updateGrauController;
}