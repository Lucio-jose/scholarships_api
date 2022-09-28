import { compareSync } from "bcrypt";
import { IContactoRepository } from "../../../contacto/repositories/IContactoRepository";
import { ILoginRepository } from "../../../login/repositories/ILoginRepository";
import { IUsuarioRepository } from "../../../usuario/repositories/IUsuarioRepository";
import jwt from "jsonwebtoken";
import auth from "@config//auth";
import { AppError } from "@errors//AppError";


class CreateSessaoUseCase{
    constructor(
        private loginRepository: ILoginRepository,
        private usuarioRepository: IUsuarioRepository,
        private contactoRepository: IContactoRepository
    ){}

    async execute(contacto: string, senha: string): Promise<any>{
        const existeContacto = await this.contactoRepository.pegarPorContacto(contacto);

        if(!existeContacto)
            throw new AppError("Login ou senha inválido!", 400);

        const usuario = await this.usuarioRepository.pegarUm(existeContacto.usuarioId);

        if(!usuario)
            throw new AppError("Login ou senha inválido!", 400);

        const login = await this.loginRepository.getLoginUsuario(usuario.id);

        if(!login)
            throw new AppError("Login ou senha inválido!", 400);

        const senhaValida = compareSync(senha, login.senha);

        if(!senhaValida)
            throw new AppError("Login ou senha inválido!", 400);

        const token = jwt.sign(
            { usuarioId: usuario.id }, 
            auth.key,
            {expiresIn: auth.expiresIn}
        );

        return {
            token,
            usuario
        };
    };
}

export { CreateSessaoUseCase };