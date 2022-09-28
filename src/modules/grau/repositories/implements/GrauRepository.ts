import { AppDataSource } from '../../../../dataSource/connection'

import { Grau } from "../../model/Grau";
import { IGrauRepository, IUpdateGrauDTO } from "../IGrauRepository";

class GrauRepository implements IGrauRepository{

    constructor(
        private GrauRepo = AppDataSource.getRepository(Grau)
    ){}
    
    async criar(designacao: string): Promise<Grau> {
        const grau = this.GrauRepo.create({ designacao });

        const salvoGrauo = await this.GrauRepo.save(grau)

        return salvoGrauo;
    }

    async listar(): Promise<Grau[]> {
        const graus = await this.GrauRepo.find();

        return graus;
    }

    async pegaPorId(id: string): Promise<Grau> {
        const grau = await this.GrauRepo.findOne({
            where: {
                id
            }
        })

        return grau;
    }

    async pegaPorDesignacao(designacao: string): Promise<Grau> {
        const grau = await this.GrauRepo.findOne({
            where: {
                designacao
            }
        })

        return grau;
    }

    async actualizar(tipoUsuario: Grau, { designacao }: IUpdateGrauDTO): Promise<Grau> {
        const grau = this.GrauRepo.merge(tipoUsuario, { designacao });

        const salvoGrau = await this.GrauRepo.save(grau);

        return salvoGrau;
    }

    async deletar(id: string): Promise<void> {
        const grau = await this.GrauRepo.findOne({
            where: { 
                id 
            }
        })
      
        if(!grau){
          throw new Error("Tipo Usuario não encontrado!")
        }
         
        await this.GrauRepo.delete(grau.id)
    }
}

export { GrauRepository };