<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicios')
export class Servicios {
=======
import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
import { Reserva } from 'src/reservas/entities/reserva.entity';
import { 
  Entity, 
  Column, 
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('servicios')
export class Servicios {

>>>>>>> de482662a88516915742c31558f30072dabbf59b
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre_del_servicio: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @ManyToMany(() => Habitacion, habitacion => habitacion.servicio)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  habitacion: Habitacion;

  @ManyToMany(() => Reserva, reserva => reserva.servicio)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  reserva: Reserva;
}
