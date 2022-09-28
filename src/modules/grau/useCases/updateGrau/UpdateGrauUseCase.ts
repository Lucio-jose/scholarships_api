import { AppError } from "@errors//AppError";
import { Grau } from "../../model/Grau";
import { IGrauRepository, IUpdateGrauDTO } from "../../repositories/IGrauRepository";


class UpdateGrauUseCase{
    constructor(private grauRepo: IGrauRepository){}

    async execute(id: string, { designacao }: IUpdateGrauDTO): Promise<Grau>{
        const existeTipo = await this.grauRepo.pegaPorId(id);
        
        if(!existeTipo)
            throw new AppError("Tipo Usuário não encontrado!", 404);
        
        const tipoActualizado = await this.grauRepo.actualizar(existeTipo, { designacao });

        return tipoActualizado;
    }
}

export { UpdateGrauUseCase }