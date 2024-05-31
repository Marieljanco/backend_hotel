import { Notificaciones } from 'src/notificaciones/entities/notificacion.entity';
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
  ci: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  apellido: string;

  @Column('varchar', { length: 20, nullable: false })
  telefono: number;

  @Column('varchar', { length: 255, nullable: false })
  direccion: string;
  //reserva-personal
  @OneToMany(() => Reserva, reserva => reserva.personal)
  reserva: Reserva[];
  //notis- perosnal
  @OneToMany(() => Notificaciones, notificaciones => notificaciones.cliente)
  notificaciones: Notificaciones[];
}

