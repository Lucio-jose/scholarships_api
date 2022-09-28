import { Login } from "../model/Login";


interface ICreateLogin{
    senha: string;
    usuarioId: string;
    contactoId: string;
}

interface ILoginRepository{
    criar({ senha, usuarioId, contactoId }: ICreateLogin): Promise<Login>;
    deletar(id: string): Promise<void>;
    getLoginContacto(contactoId: string): Promise<Login> | undefined;
    getLoginUsuario(usuarioId: string): Promise<Login> | undefined;
    pegarUm(id: string): Promise<Login>;
}

export { ILoginRepository, ICreateLogin };