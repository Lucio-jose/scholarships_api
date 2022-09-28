import { AppError } from "@errors//AppError";
import { IGrauRepository } from "@modules//grau/repositories/IGrauRepository";
import { GrauEstudante } from "../../model/GrauEstudante";
import { IGrauEstudanteRepository } from "../../repositories/IGrauEstudanteRepository";


class UpdateGrauEstudanteUseCase{
    constructor(
        private grauEstudanteRepo: IGrauEstudanteRepository,
        private grauRepository: IGrauRepository
    ){}

    async execute(id: string, grauId: string): Promise<GrauEstudante>{
        const grauEst = await this.grauEstudanteRepo.pegarUm(id);

        if(!grauEst)
            throw new AppError("Grau de Estudante não encontrado!", 404);

        const grau = await this.grauRepository.pegaPorId(grauId);

        if(!grau)
            throw new AppError("Grau não encontrado!", 404);

        const grauEstudante = await this.grauEstudanteRepo.atualizar(grauEst, { grauId, grau });

        return grauEstudante;
    }
}

export { UpdateGrauEstudanteUseCase };