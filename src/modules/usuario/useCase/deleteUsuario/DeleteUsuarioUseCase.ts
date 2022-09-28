import { AppError } from "@errors//AppError";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";


class DeleteUsuarioUseCase{
    constructor(private UsuarioRepo: IUsuarioRepository){}

    async execute(id: string): Promise<void>{
        const existe = await this.UsuarioRepo.pegarUm(id);

        if(!existe)
            throw new AppError("Usuario não encontrado!", 404);
        
        await this.UsuarioRepo.deletar(id);
    }
};

export { DeleteUsuarioUseCase };