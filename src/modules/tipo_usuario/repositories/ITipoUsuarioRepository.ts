import { TipoUsuario } from "../model/TipoUsuario";

interface IUpdateTipoUsuarioDTO {
    designacao: string
} 

interface ITipoUsuarioRepository {
    criar(designacao: string): Promise<TipoUsuario>;
    listar(): Promise<TipoUsuario[]>;
    pegaPorId(id: string): Promise<TipoUsuario> | undefined;
    pegaPorDesignacao(designacao: string): Promise<TipoUsuario> | undefined;
    actualizar(tipoUsuario: TipoUsuario, { designacao }: IUpdateTipoUsuarioDTO): Promise<TipoUsuario>;
    deletar(id: string): Promise<void>;
}

export { ITipoUsuarioRepository, IUpdateTipoUsuarioDTO };