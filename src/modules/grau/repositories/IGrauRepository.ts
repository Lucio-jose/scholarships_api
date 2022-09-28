import { Grau } from "../model/Grau";

interface IUpdateGrauDTO {
    designacao: string
} 

interface IGrauRepository {
    criar(designacao: string): Promise<Grau>;
    listar(): Promise<Grau[]>;
    pegaPorId(id: string): Promise<Grau> | undefined;
    pegaPorDesignacao(designacao: string): Promise<Grau> | undefined;
    actualizar(Grau: Grau, { designacao }: IUpdateGrauDTO): Promise<Grau>;
    deletar(id: string): Promise<void>;
}

export { IGrauRepository, IUpdateGrauDTO };