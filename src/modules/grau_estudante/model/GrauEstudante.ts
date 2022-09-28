import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, Timestamp } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Grau } from "../../grau/model/Grau";
import { Usuario } from "../../usuario/model/Usuario";

@Entity('grau_estudante')
class GrauEstudante {
    @PrimaryColumn()
    id?: string;

    @Column()
    grauId: string;
    @OneToOne(() => Grau, (grau) => grau, { eager: true })
    @JoinColumn()
    grau: Grau;

    @Column()
    estudanteId: string;
    @OneToOne(() => Usuario, (estudante) => estudante, { eager: true })
    @JoinColumn()
    estudante: Usuario;
    
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

export { GrauEstudante }