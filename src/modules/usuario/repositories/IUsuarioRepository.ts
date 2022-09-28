import { Usuario } from "../model/Usuario";


interface ICreateUsuarioDTO{
    nome: string;
    sobreNome: string;
    dataNascimento: Date;
    tipoUsuarioId: string;
}

interface IUpdateUsuarioDTO{
    nome?: string;
    sobreNome?: string;
}

interface ITurnUsuarioAdminDTO{
    tipoUsuarioId: string;
}

interface IUsuarioRepository{
    criar({ nome, sobreNome, dataNascimento, tipoUsuarioId }: ICreateUsuarioDTO): Promise<Usuario>;
    listar(): Promise<Usuario[]>;
    atualizar(usuario: Usuario, { nome, sobreNome }: IUpdateUsuarioDTO): Promise<Usuario>;
    deletar(id: string): Promise<void>;
    pegarUm(id: string): Promise<Usuario> | undefined;
    turnUsuarioAdmin(usuario: Usuario): Promise<Usuario>;
}

export { IUsuarioRepository, ICreateUsuarioDTO, IUpdateUsuarioDTO, ITurnUsuarioAdminDTO };