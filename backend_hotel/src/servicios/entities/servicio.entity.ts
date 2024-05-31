import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
import { Reserva } from 'src/reservas/entities/reserva.entity';
import { 
  Entity, 
  Column, 
  ManyToMany,
  JoinTable
} from 'typeorm';

@Entity('servicios')
export class Servicios {
  @Column('varchar', { length: 100, nullable: false })
  nombre_del_servicio: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion: string;

  @Column('varchar', { length: 100, nullable: false })
  precio: string;

  @Column('varchar', { length: 15, nullable: false })
  disponibilidad: string;

  @Column('int', { nullable: false })
  duracion: number;

  @ManyToMany(() => Habitacion, habitacion => habitacion.servicio)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  habitacion: Habitacion;

  @ManyToMany(() => Reserva, reserva => reserva.servicio)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  reserva: Reserva;
}
