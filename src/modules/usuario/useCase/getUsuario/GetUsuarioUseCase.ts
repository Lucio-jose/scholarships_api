import { Usuario } from "../../model/Usuario";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";


class GetUsuarioUseCase{
    constructor(private UsuarioRepo: IUsuarioRepository){}

    async execute(): Promise<Usuario[]>{
        const usuarios = await this.UsuarioRepo.listar()

        return usuarios;
    }
};

export { GetUsuarioUseCase };