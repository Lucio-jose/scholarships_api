import { AppError } from "@errors//AppError";
import { IGrauRepository } from "@modules//grau/repositories/IGrauRepository";
import { GrauEstudante } from "../../model/GrauEstudante";
import { IGrauEstudanteRepository } from "../../repositories/IGrauEstudanteRepository";


class GetEstudanteGrauUseCase{
    constructor(
        private grauEstudanteRepo: IGrauEstudanteRepository,
        private grauRepository: IGrauRepository
    ){}

    async execute(grauId: string): Promise<GrauEstudante[]>{
        const grau = await this.grauRepository.pegaPorId(grauId);

        if(!grau)
            throw new AppError("Grau não encontrado!", 404);
        
        const estudanteGrau = await this.grauEstudanteRepo.pegarPorGrau(grauId);

        return estudanteGrau;
    }
};

export { GetEstudanteGrauUseCase };