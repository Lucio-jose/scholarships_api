import { AppError } from "@errors//AppError";
import { ITipoContactoRepository } from "../../repositories/ITipoContactoRepository";


class DeleteTipoContactoUseCase{
    constructor(private tipoContactoRepo: ITipoContactoRepository){}

    async execute(id: string): Promise<void>{
        const existeTipo = await this.tipoContactoRepo.pegaPorId(id);

        if(!existeTipo)
            throw new AppError("TipoContacto não encontrado!", 404);
        
        await this.tipoContactoRepo.deletar(id);
    }
};

export { DeleteTipoContactoUseCase };