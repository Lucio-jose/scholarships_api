import { AppError } from "@errors//AppError";
import { TipoContacto } from "../../model/TipoContacto";
import { ITipoContactoRepository, IUpdateTipoContactoDTO } from "../../repositories/ITipoContactoRepository";


class UpdateTipoContactoUseCase{
    constructor(private tipoContactoRepo: ITipoContactoRepository){}

    async execute(id: string, { designacao }: IUpdateTipoContactoDTO): Promise<TipoContacto>{
        const existeTipo = await this.tipoContactoRepo.pegaPorId(id);
        
        if(!existeTipo)
            throw new AppError("Tipo Usuário não encontrado!", 404);
        
        const tipoActualizado = await this.tipoContactoRepo.actualizar(existeTipo, { designacao });

        return tipoActualizado;
    }
}

export { UpdateTipoContactoUseCase }