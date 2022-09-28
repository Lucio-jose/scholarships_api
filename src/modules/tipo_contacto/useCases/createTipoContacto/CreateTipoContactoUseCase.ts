import { AppError } from "@errors//AppError";
import { TipoContacto } from "../../model/TipoContacto";
import { ITipoContactoRepository } from "../../repositories/ITipoContactoRepository";


class CreateTipoContactoUseCase {
    constructor(public tipoContactoRepo: ITipoContactoRepository){}

    async execute(designacao: string): Promise<TipoContacto>{
        const existeDesignacao = await this.tipoContactoRepo.pegaPorDesignacao(designacao)

        if(existeDesignacao)
            throw new AppError("Tipo de usuário já existente!", 404);

        const tipoContacto = await this.tipoContactoRepo.criar(designacao);

        return tipoContacto;
    }
}

export { CreateTipoContactoUseCase };