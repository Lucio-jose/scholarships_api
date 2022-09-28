import { AppError } from "@errors//AppError";
import { Usuario } from "../../model/Usuario";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";


class TurnUsuarioAdminUseCase{

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){};

    async execute(id: string): Promise<Usuario>{
        const existeUsuario = await this.usuarioRepository.pegarUm(id);

        if(!existeUsuario)
            throw new AppError("Usuário não encontrado!", 404)
        
        if(existeUsuario.tipoUsuario.designacao.toLowerCase() === 'administrador geral')
            throw new AppError("Operação inválida!", 400)

        const usuario = await this.usuarioRepository.turnUsuarioAdmin(existeUsuario);

        return usuario;
    }
}

export { TurnUsuarioAdminUseCase };