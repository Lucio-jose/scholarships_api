import { AppError } from "@errors//AppError";
import { IGrauRepository } from "../../repositories/IGrauRepository";


class DeleteGrauUseCase{
    constructor(private grauRepo: IGrauRepository){}

    async execute(id: string): Promise<void>{
        const existe = await this.grauRepo.pegaPorId(id);

        if(!existe)
            throw new AppError("Grau não encontrado!", 404);
        
        await this.grauRepo.deletar(id);
    }
};

export { DeleteGrauUseCase };