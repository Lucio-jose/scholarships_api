import { AppError } from "@errors//AppError";
import { TipoUsuario } from "../../model/TipoUsuario";
import { ITipoUsuarioRepository } from "../../repositories/ITipoUsuarioRepository";


class CreateTipoUsuarioUseCase {
    constructor(public tipoUsuarioRepo: ITipoUsuarioRepository){}

    async execute(designacao: string): Promise<TipoUsuario>{
        const existeDesignacao = await this.tipoUsuarioRepo.pegaPorDesignacao(designacao)

        if(existeDesignacao)
            throw new AppError("Tipo de usuário já existente!", 400)

        const tipoUsuario = await this.tipoUsuarioRepo.criar(designacao)

        return tipoUsuario;
    }
}

export { CreateTipoUsuarioUseCase };