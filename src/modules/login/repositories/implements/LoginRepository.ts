import { AppDataSource } from "@dataSource//connection";
import { Login } from "../../model/Login";
import { ICreateLogin, ILoginRepository } from "../ILoginRepository";


class LoginRepository implements ILoginRepository{
    constructor(
        private loginRepository = AppDataSource.getRepository(Login)
    ){}

    async criar({ senha, usuarioId, contactoId }: ICreateLogin): Promise<Login> {
        const login = this.loginRepository.create({ senha, usuarioId, contactoId });

        const retorno = await this.loginRepository.save(login);

        return retorno;
    }

    async deletar(id: string): Promise<void> {
        await this.loginRepository.delete(id);
    }

    async getLoginContacto(contactoId: string): Promise<Login> | undefined{
        const login = await this.loginRepository.findOne({
            where: {
                contactoId
            }
        });

        return login;
    }

    async getLoginUsuario(usuarioId: string): Promise<Login> {
        const login = await this.loginRepository.findOne({
            where: {
                usuarioId
            }
        });

        return login;
    }

    async pegarUm(id: string): Promise<Login> {
        const login = await this.loginRepository.findOne({
            where: {
                id
            }
        });

        return login;
    }

}

export { LoginRepository };