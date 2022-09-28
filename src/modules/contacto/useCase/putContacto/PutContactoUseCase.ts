import { AppError } from "@errors//AppError";
import { Contacto } from "../../model/Contacto";
import { IContactoRepository } from "../../repositories/IContactoRepository";


class PutContactoUseCase{
    constructor(
        private contactoRepository: IContactoRepository
    ){}

    async execute(id: string, contacto: string): Promise<Contacto>{
        const cont = await this.contactoRepository.pegarUm(id);

        if(!cont)
            throw new AppError("Contacto não encontrado!", 404);

        const contactoAtualizado = await this.contactoRepository.atualizar(cont, { contacto });

        return contactoAtualizado;
    }
}

export { PutContactoUseCase };