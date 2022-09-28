import { AppDataSource } from "@dataSource//connection";
import { GrauEstudante } from "../../model/GrauEstudante";
import { IGrauEstudanteRepository, IUpdateGrauEstudanteDTO } from "../IGrauEstudanteRepository";


class GrauEstudanteRepository implements IGrauEstudanteRepository{
    constructor(
        private grauEstudanteRepo = AppDataSource.getRepository(GrauEstudante)
    ){}

    async criar(grauId: string, estudanteId: string): Promise<GrauEstudante> {
        const grauEstudante = this.grauEstudanteRepo.create({
            grauId, estudanteId
        });

        const resul = await this.grauEstudanteRepo.save(grauEstudante);

        return resul;
    }

    async atualizar(
        grauEstudante: GrauEstudante, 
        { grauId, grau }: IUpdateGrauEstudanteDTO
    ): Promise<GrauEstudante> {
        const grauEst = this.grauEstudanteRepo.merge(grauEstudante, { grauId, grau });

        const resul = await this.grauEstudanteRepo.save(grauEst);

        return resul;
    }

    async deletar(id: string): Promise<void> {
        await this.grauEstudanteRepo.delete(id);
    }

    async pegarPorEstudante(estudanteId: string): Promise<GrauEstudante> | undefined{
        const grauEstudante = await this.grauEstudanteRepo.findOne({
            where: {
                estudanteId
            }
        })

        return grauEstudante;
    }

    async pegarPorGrau(grauId: string): Promise<GrauEstudante[]> {
        const grauEstudante = await this.grauEstudanteRepo.find({
            where: {
                grauId
            }
        });

        return grauEstudante;
    }

    async pegarUm(id: string): Promise<GrauEstudante> {
        const grauEst = await this.grauEstudanteRepo.findOne({
            where: {
                id
            }
        })

        return grauEst;
    }
}

export { GrauEstudanteRepository };