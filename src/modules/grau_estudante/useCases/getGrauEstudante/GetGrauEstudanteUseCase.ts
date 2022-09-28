import { AppError } from "@errors//AppError";
import { IUsuarioRepository } from "@modules//usuario/repositories/IUsuarioRepository";
import { GrauEstudante } from "../../model/GrauEstudante";
import { IGrauEstudanteRepository } from "../../repositories/IGrauEstudanteRepository";


class GetGrauEstudanteUseCase{
    constructor(
        private grauEstudanteRepo: IGrauEstudanteRepository,
        private estudantepository: IUsuarioRepository
    ){}

    async execute(estudanteId: string): Promise<GrauEstudante>{
        const estudante = await this.estudantepository.pegarUm(estudanteId);

        if(!estudante)
            throw new AppError("Estudante não encontrado!", 404);
        
        const grauEstudantes = await this.grauEstudanteRepo.pegarPorEstudante(estudanteId);

        return grauEstudantes;
    }
};

export { GetGrauEstudanteUseCase };