import { AppError } from "@errors//AppError";
import { TipoUsuario } from "../../model/TipoUsuario";
import { ITipoUsuarioRepository, IUpdateTipoUsuarioDTO } from "../../repositories/ITipoUsuarioRepository";


class UpdateTipoUsuarioUseCase{
    constructor(private tipoUsuarioRepo: ITipoUsuarioRepository){}

    async execute(id: string, { designacao }: IUpdateTipoUsuarioDTO): Promise<TipoUsuario>{
        const existeTipo = await this.tipoUsuarioRepo.pegaPorId(id);
        
        if(!existeTipo)
            throw new AppError("Tipo Usuário não encontrado!", 404);
        
        const tipoActualizado = await this.tipoUsuarioRepo.actualizar(existeTipo, { designacao });

        return tipoActualizado;
    }
}

export { UpdateTipoUsuarioUseCase }