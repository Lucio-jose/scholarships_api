import { AppError } from "@errors//AppError";
import { IUsuarioRepository } from "@modules//usuario/repositories/IUsuarioRepository";
import { Contacto } from "../../model/Contacto";
import { IContactoRepository } from "../../repositories/IContactoRepository";


class GetContactoUseCase{
    constructor(
        private contactoRepository: IContactoRepository,
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(usuarioId: string): Promise<Contacto[]>{
        const usuario = await this.usuarioRepository.pegarUm(usuarioId);

        if(!usuario)
            throw new AppError("Usuário não encontrado!", 404);
        
        const contactos = await this.contactoRepository.listar(usuario.id);

        return contactos;
    }
};

export { GetContactoUseCase };