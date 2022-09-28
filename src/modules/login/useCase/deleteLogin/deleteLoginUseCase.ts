import { AppError } from "@errors//AppError";
import { ILoginRepository } from "../../repositories/ILoginRepository";


class DeleteLoginUseCase{
    constructor(
        private loginRepository: ILoginRepository
    ){}

    async execute(id: string): Promise<void>{
        const login = await this.loginRepository.pegarUm(id);

        if(!login)
            throw new AppError("Dado não encontrado!", 404);

        await this.loginRepository.deletar(login.id);
    };
}

export { DeleteLoginUseCase };