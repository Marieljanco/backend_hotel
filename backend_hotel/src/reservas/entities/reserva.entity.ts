import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  fecha_reserva: Date;

  @Column('date')
  fecha_entrada: Date;

  @Column('date')
  fecha_salida: Date;

  @Column('varchar', { length: 100 })
  estado: string;

  // @ManyToOne(() => Cliente, cliente => cliente.reservas)
  // @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  // cliente: Cliente;

  // @ManyToOne(() => Habitacion, habitacion => habitacion.reservas)
  // @JoinColumn({ name: 'numero_habitacion' })
  // habitacion: Habitacion;
}
