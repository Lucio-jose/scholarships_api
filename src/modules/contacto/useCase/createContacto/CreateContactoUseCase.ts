import { AppError } from "@errors//AppError";
import { ITipoUsuarioRepository } from "@modules//tipo_usuario/repositories/ITipoUsuarioRepository";
import { IUsuarioRepository } from "../../../usuario/repositories/IUsuarioRepository";
import { Contacto } from "../../model/Contacto";
import { IContactoRepository, ICreateContactoDTO } from "../../repositories/IContactoRepository";


class CreateContactoUseCase {
    constructor(
        private contactoRepository: IContactoRepository,
        private usuarioRepo: IUsuarioRepository, 
        private tipoContactoRepo: ITipoUsuarioRepository,
    ){}

    async execute({ tipoContactoId, usuarioId, contacto }: ICreateContactoDTO): Promise<Contacto>{
        const usuario = await this.usuarioRepo.pegarUm(usuarioId);

        if(!usuario)
            throw new AppError("Usuário não encontrado!")

        const tipoContacto = await this.tipoContactoRepo.pegaPorId(tipoContactoId);

        if(!tipoContacto)
            throw new AppError("TipoContacto não encontrado!", 404);

        const contactoSalvo = this.contactoRepository.criar({ contacto, usuarioId, tipoContactoId });

        return contactoSalvo;
    }
}

export { CreateContactoUseCase };