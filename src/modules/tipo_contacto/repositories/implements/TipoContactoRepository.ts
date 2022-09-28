import { AppDataSource } from "../../../../dataSource/connection"

import { TipoContacto } from "../../model/TipoContacto";
import { ITipoContactoRepository, IUpdateTipoContactoDTO } from "../ITipoContactoRepository";

class TipoContactoRepository implements ITipoContactoRepository{

    constructor(
        private TipoContactoRepo = AppDataSource.getRepository(TipoContacto)
    ){}
    
    async criar(designacao: string): Promise<TipoContacto> {
        const tipoContacto = this.TipoContactoRepo.create({ designacao });

        const salvoTipoContacto = await this.TipoContactoRepo.save(tipoContacto)

        return salvoTipoContacto;
    }

    async listar(): Promise<TipoContacto[]> {
        const tipoContactos = await this.TipoContactoRepo.find();

        return tipoContactos;
    }

    async pegaPorId(id: string): Promise<TipoContacto> {
        const tipoContacto = await this.TipoContactoRepo.findOne({
            where: {
                id
            }
        })

        return tipoContacto;
    }

    async pegaPorDesignacao(designacao: string): Promise<TipoContacto> {
        const tipoContacto = await this.TipoContactoRepo.findOne({
            where: {
                designacao
            }
        })

        return tipoContacto;
    }

    async actualizar(tipoContacto: TipoContacto, { designacao }: IUpdateTipoContactoDTO): Promise<TipoContacto> {
        const tipoActualizado = this.TipoContactoRepo.merge(tipoContacto, { designacao });

        const salvoTipoContacto = await this.TipoContactoRepo.save(tipoActualizado);

        return salvoTipoContacto;
    }

    async deletar(id: string): Promise<void> {
        const apagarTipoContacto = await this.TipoContactoRepo.findOne({
            where: { 
                id 
            }
        })
      
        if(!apagarTipoContacto){
          throw new Error("Tipo Contacto não encontrado!")
        }
         
        await this.TipoContactoRepo.delete(apagarTipoContacto.id)
    }
}

export { TipoContactoRepository }