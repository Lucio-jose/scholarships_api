import { Grau } from "../../model/Grau";
import { IGrauRepository } from "../../repositories/IGrauRepository";


class GetGrauUseCase{
    constructor(private grauRepo: IGrauRepository){}

    async listarTodos(): Promise<Grau[]>{
        const graus = await this.grauRepo.listar()

        return graus;
    }
};

export { GetGrauUseCase };