import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToOne
} from 'typeorm';

@Entity('personal')
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  apellido: string;

  @Column('varchar', { length: 100, nullable: false })
  cargo: string;

  @Column('decimal', { nullable: false })
  salario: number;

  @Column('varchar', { length: 100, nullable: false })
  fechaContratacion: string;

  //reserva-personal
  // @OneToMany(() => Reserva, reserva => reserva.personal)
  // reserva: Reserva[];
//personal usuario
  @OneToOne(() => Usuario, usuario => usuario.personal)
  usuario: Usuario;
}

