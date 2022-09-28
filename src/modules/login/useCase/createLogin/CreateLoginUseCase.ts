import { AppError } from "@errors//AppError";
import { IContactoRepository } from "@modules//contacto/repositories/IContactoRepository";
import { IUsuarioRepository } from "@modules//usuario/repositories/IUsuarioRepository";
import { Login } from "../../model/Login";
import { ICreateLogin, ILoginRepository } from "../../repositories/ILoginRepository";


class CreateLoginUseCase{
    constructor(
        private loginRepository: ILoginRepository,
        private usuarioRepository: IUsuarioRepository,
        private contactoRepository: IContactoRepository
    ){}

    async execute({ senha, usuarioId, contactoId }: ICreateLogin): Promise<Login>{
        const contacto = await this.contactoRepository.pegarUm(contactoId);

        if(!contacto)
            throw new AppError("Contacto não encontrado!", 404);

        const usuario = await this.usuarioRepository.pegarUm(usuarioId);

        if(!usuario)
            throw new AppError("Usuário não encontrado!", 404);

        const contactoLogin = await this.loginRepository.getLoginContacto(contactoId);

        if(contactoLogin)
            throw new AppError("Contacto inválido!", 400)

        const usuarioLogin = await this.loginRepository.getLoginUsuario(usuarioId);

        if(usuarioLogin)
            throw new AppError("Usuário inválido!", 400)

        if(contacto.usuarioId !== usuario.id)
            throw new AppError("Permissão não concedida!", 400)
        
        const login = await this.loginRepository.criar({ senha, usuarioId, contactoId });

        return login;
    }
}

export { CreateLoginUseCase };