import { TipoUsuario } from "../../model/TipoUsuario";
import { ITipoUsuarioRepository } from "../../repositories/ITipoUsuarioRepository";


class GetTipoUsuarioUseCase{
    constructor(private tipoUsuarioRepo: ITipoUsuarioRepository){}

    async listarTodos(): Promise<TipoUsuario[]>{
        const tipoUsuarios = await this.tipoUsuarioRepo.listar()

        return tipoUsuarios;
    }
};

export { GetTipoUsuarioUseCase };