import { AppError } from "@errors//AppError";
import { Usuario } from "../../model/Usuario";
import { IUsuarioRepository, IUpdateUsuarioDTO } from "../../repositories/IUsuarioRepository";


class PutUsuarioUseCase{
    constructor(private usuarioRepo: IUsuarioRepository){}

    async execute(id: string, { nome, sobreNome }: IUpdateUsuarioDTO): Promise<Usuario>{
        const existe = await this.usuarioRepo.pegarUm(id);
        
        if(!existe)
            throw new AppError("Usuário não encontrado!")
        
        const usuarioActualizado = await this.usuarioRepo.atualizar(existe, { nome, sobreNome })

        return usuarioActualizado;
    }
}

export { PutUsuarioUseCase }