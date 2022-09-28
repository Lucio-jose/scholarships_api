import { AppError } from "@errors//AppError";
import { Grau } from "../../model/Grau";
import { IGrauRepository } from "../../repositories/IGrauRepository";


class CreateGrauUseCase {
    constructor(public GrauRepo: IGrauRepository){}

    async execute(designacao: string): Promise<Grau>{
        const existeDesignacao = await this.GrauRepo.pegaPorDesignacao(designacao)

        if(existeDesignacao)
            throw new AppError("Tipo de usuário já existente!", 400)

        const grau = await this.GrauRepo.criar(designacao)

        return grau;
    }
}

export { CreateGrauUseCase };