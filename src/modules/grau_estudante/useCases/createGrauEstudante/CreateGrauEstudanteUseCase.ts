import { AppError } from "@errors//AppError";
import { IGrauRepository } from "@modules//grau/repositories/IGrauRepository";
import { IUsuarioRepository } from "@modules//usuario/repositories/IUsuarioRepository";
import { GrauEstudante } from "../../model/GrauEstudante";
import { IGrauEstudanteRepository } from "../../repositories/IGrauEstudanteRepository";



class CreateGrauEstudanteUseCase {
    constructor(
        private grauEstudanteRepo: IGrauEstudanteRepository,
        private estudanteRepo: IUsuarioRepository, 
        private grauRepository: IGrauRepository,
    ){}

    async execute(grauId: string, estudanteId: string): Promise<GrauEstudante>{
        const estudante = await this.estudanteRepo.pegarUm(estudanteId);

        if(!estudante)
            throw new AppError("Estudante não encontrado!", 404)

        const grau = await this.grauRepository.pegaPorId(grauId);

        if(!grau)
            throw new AppError("Grau não encontrado!", 404);

        const existeEstudante = await this.grauEstudanteRepo.pegarPorEstudante(estudante.id);

        if(existeEstudante)
            throw new AppError("Estudante já tem um grau!", 400);

        if(estudante.tipoUsuario.designacao.toLowerCase() !== "estudante")
            throw new AppError("Usuário não autorizado!", 400)

        const grauEstudanteSalvo = this.grauEstudanteRepo.criar(grauId, estudanteId);

        return grauEstudanteSalvo;
    }
}

export { CreateGrauEstudanteUseCase };