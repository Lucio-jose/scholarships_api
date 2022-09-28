import { TipoContacto } from "../model/TipoContacto";

interface IUpdateTipoContactoDTO {
    designacao: string
} 

interface ITipoContactoRepository {
    criar(designacao: string): Promise<TipoContacto>;
    listar(): Promise<TipoContacto[]>;
    pegaPorId(id: string): Promise<TipoContacto> | undefined;
    pegaPorDesignacao(designacao: string): Promise<TipoContacto> | undefined;
    actualizar(TipoContacto: TipoContacto, { designacao }: IUpdateTipoContactoDTO): Promise<TipoContacto>;
    deletar(id: string): Promise<void>;
}

export { ITipoContactoRepository, IUpdateTipoContactoDTO }