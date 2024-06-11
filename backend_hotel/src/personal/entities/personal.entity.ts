import { Reserva } from 'src/reservas/entities/reserva.entity';
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToMany 
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

  @Column('decimal', { length: 100, nullable: false })
  salario: number;

  @Column('varchar', { length: 100, nullable: false })
  fechaContratacion: string;

  //reserva-personal
  @OneToMany(() => Reserva, reserva => reserva.personal)
  reserva: Reserva[];
  //notis- perosnal

}

