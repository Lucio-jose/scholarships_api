import { AppError } from "@errors//AppError";
import { ITipoUsuarioRepository } from "@modules//tipo_usuario/repositories/ITipoUsuarioRepository";
import { Usuario } from "../../model/Usuario";
import { ICreateUsuarioDTO, IUsuarioRepository } from "../../repositories/IUsuarioRepository";


class CreateUsuarioUseCase {
    constructor(
        private usuarioRepo: IUsuarioRepository, 
        private tipoUsuarioRepo: ITipoUsuarioRepository
    ){}

    async execute({ nome, sobreNome, tipoUsuarioId, dataNascimento }: ICreateUsuarioDTO): Promise<Usuario>{
        const existeTipo = await this.tipoUsuarioRepo.pegaPorId(tipoUsuarioId);

        if(!existeTipo)
            throw new AppError("TipoUsuário não encontrado!", 404)
        
        const usuario = await this.usuarioRepo.criar({ nome, sobreNome, tipoUsuarioId, dataNascimento});

        return usuario;
    }
}

export { CreateUsuarioUseCase };