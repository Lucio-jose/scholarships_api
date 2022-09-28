import { AppError } from "@errors//AppError";
import { IContactoRepository } from "../../repositories/IContactoRepository";


class DeleteContactoUseCase{
    constructor(
        private contactoRepository: IContactoRepository
    ){}

    async execute(id: string): Promise<void>{
        const contacto = await this.contactoRepository.pegarUm(id);

        if(!contacto)
            throw new AppError("Contacto não encontrado!", 404);

        this.contactoRepository.deletar(contacto.id);
    }
};

export { DeleteContactoUseCase };