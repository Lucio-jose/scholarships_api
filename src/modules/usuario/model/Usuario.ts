import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TipoUsuario } from "../../tipo_usuario/model/TipoUsuario";

@Entity('usuario')
class Usuario {
    @PrimaryColumn()
    id?: string;

    @Column()
    nome: string;

    @Column()
    sobreNome: string;

    @Column()
    dataNascimento: Date;

    @Column()
    tipoUsuarioId: string;
    @ManyToOne(() => TipoUsuario, (tipoUsuario) => tipoUsuario, { eager: true })
    @JoinColumn()
    tipoUsuario: TipoUsuario;
    
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

export { Usuario }