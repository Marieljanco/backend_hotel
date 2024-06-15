import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { Servicios } from 'src/servicios/entities/servicio.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'fecha_reservacion' })
  fecha_reserva: Date;

  @CreateDateColumn({ name: 'fecha_entradacion' })
  fecha_entrada: Date;

  @CreateDateColumn({ name: 'fecha_salidan' })
  fecha_salida: Date;

  @Column('varchar', { length: 100 })
  estado: string;

  @ManyToOne(() => Cliente, cliente => cliente.reserva)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @ManyToOne(() => Habitacion, habitacion => habitacion.reserva)
  @JoinColumn({ name: 'numero_habitacion' })
  habitacion: Habitacion;

  //pago reserva 1 a 1
  @OneToOne(() => Pago, pago => pago.reserva)
  @JoinColumn()
  pago: Pago;

  @ManyToMany(() => Servicios, servicio => servicio.reservas)
  @JoinTable({ name: 'reserva_servicio' })
  servicios: Servicios[];
}
