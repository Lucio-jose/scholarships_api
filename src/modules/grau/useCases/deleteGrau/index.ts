import { GrauRepository } from "../../repositories/implements/GrauRepository";
import { DeleteGrauController } from "./DeleteGrauController";
import { DeleteGrauUseCase } from "./DeleteGrauUseCase";


export default (): DeleteGrauController => {
    const grauRepo = new GrauRepository();
    const deleteGrauUseCase = new DeleteGrauUseCase(grauRepo);
    const deleteGrauController = new DeleteGrauController(deleteGrauUseCase);

    return deleteGrauController;
}