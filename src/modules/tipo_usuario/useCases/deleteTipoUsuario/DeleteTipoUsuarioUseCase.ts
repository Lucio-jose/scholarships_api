import { AppError } from "@errors//AppError";
import { ITipoUsuarioRepository } from "../../repositories/ITipoUsuarioRepository";


class DeleteTipoUsuarioUseCase{
    constructor(private tipoUsuarioRepo: ITipoUsuarioRepository){}

    async execute(id: string): Promise<void>{
        const existeTipo = await this.tipoUsuarioRepo.pegaPorId(id);

        if(!existeTipo)
            throw new AppError("TipoUsuario não encontrado!", 404);
        
        await this.tipoUsuarioRepo.deletar(id);
    }
};

export { DeleteTipoUsuarioUseCase };