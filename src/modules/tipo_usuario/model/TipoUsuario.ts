import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('tipo_usuario')
class TipoUsuario {
    @PrimaryColumn()
    id?: string;

    @Column()
    designacao: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;
  
    constructor(){
      if (!this.id) {
        this.id = uuidV4();
      }
    }
}

export { TipoUsuario }