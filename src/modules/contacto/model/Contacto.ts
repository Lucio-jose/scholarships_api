import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { TipoContacto } from "../../tipo_contacto/model/TipoContacto";
import { Usuario } from "../../usuario/model/Usuario";

@Entity('contacto')
class Contacto {
    @PrimaryColumn()
    id?: string;

    @Column()
    contacto: string;

    @Column()
    tipoContactoId: string;
    @ManyToOne(() => TipoContacto, (tipoContacto) => tipoContacto, { eager: true })
    @JoinColumn()
    tipoContacto: TipoContacto;

    @Column()
    usuarioId: string;
    @ManyToOne(() => Usuario, (usuario) => usuario, { eager: true })
    @JoinColumn()
    usuario: Usuario;
    
    @CreateDateColumn()
    createdAt: Timestamp;

    @CreateDateColumn()
    updatedAt: Timestamp;
  
    constructor(){
      if (!this.id) {
        this.id = uuidV4();
      }
    }
}

export { Contacto }