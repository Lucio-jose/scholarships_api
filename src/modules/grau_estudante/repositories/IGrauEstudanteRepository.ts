import { Grau } from "../../grau/model/Grau";
import { GrauEstudante } from "../model/GrauEstudante";

interface IUpdateGrauEstudanteDTO {
    grauId: string;
    grau: Grau;
}

interface IGrauEstudanteRepository{
    criar(grauId: string, estudanteId: string): Promise<GrauEstudante>;
    atualizar(grauEstudante: GrauEstudante, { grauId, grau }: IUpdateGrauEstudanteDTO): Promise<GrauEstudante>;
    deletar(id: string): Promise<void>;
    pegarPorEstudante(estudanteId: string): Promise<GrauEstudante> | undefined;
    pegarPorGrau(grauId: string): Promise<GrauEstudante[]> | undefined;
    pegarUm(id: string): Promise<GrauEstudante>;
}

export { IGrauEstudanteRepository, IUpdateGrauEstudanteDTO };