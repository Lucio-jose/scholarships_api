import { TipoContacto } from "../../model/TipoContacto";
import { ITipoContactoRepository } from "../../repositories/ITipoContactoRepository";


class GetTipoContactoUseCase{
    constructor(private tipoContactoRepo: ITipoContactoRepository){}

    async listarTodos(): Promise<TipoContacto[]>{
        const tipoContactos = await this.tipoContactoRepo.listar()

        return tipoContactos;
    }
};

export { GetTipoContactoUseCase };