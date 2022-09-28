import { AppDataSource } from '../../../../dataSource/connection'

import { TipoUsuario } from "../../model/TipoUsuario";
import { ITipoUsuarioRepository, IUpdateTipoUsuarioDTO } from "../ITipoUsuarioRepository";

class TipoUsuarioRepository implements ITipoUsuarioRepository{

    constructor(
        private TipoUsuarioRepo = AppDataSource.getRepository(TipoUsuario)
    ){}
    
    async criar(designacao: string): Promise<TipoUsuario> {
        const tipoUsuario = this.TipoUsuarioRepo.create({ designacao });

        const salvoTipoUsuario = await this.TipoUsuarioRepo.save(tipoUsuario)

        return salvoTipoUsuario;
    }

    async listar(): Promise<TipoUsuario[]> {
        const tipoUsuarios = await this.TipoUsuarioRepo.find();

        return tipoUsuarios;
    }

    async pegaPorId(id: string): Promise<TipoUsuario> {
        const tipoUsuario = await this.TipoUsuarioRepo.findOne({
            where: {
                id
            }
        })

        return tipoUsuario;
    }

    async pegaPorDesignacao(designacao: string): Promise<TipoUsuario> {
        const tipoUsuario = await this.TipoUsuarioRepo.findOne({
            where: {
                designacao
            }
        })

        return tipoUsuario;
    }

    async actualizar(tipoUsuario: TipoUsuario, { designacao }: IUpdateTipoUsuarioDTO): Promise<TipoUsuario> {
        const tipoActualizado = this.TipoUsuarioRepo.merge(tipoUsuario, { designacao });

        const salvoTipoUsuario = await this.TipoUsuarioRepo.save(tipoActualizado);

        return salvoTipoUsuario;
    }

    async deletar(id: string): Promise<void> {
        const apagarTipoUsuario = await this.TipoUsuarioRepo.findOne({
            where: { 
                id 
            }
        })
      
        if(!apagarTipoUsuario){
          throw new Error("Tipo Usuario não encontrado!")
        }
         
        await this.TipoUsuarioRepo.delete(apagarTipoUsuario.id)
    }
}

export { TipoUsuarioRepository }