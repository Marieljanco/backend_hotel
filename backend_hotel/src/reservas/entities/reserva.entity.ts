import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { Personal } from 'src/personal/entities/personal.entity';
import { Servicios } from 'src/servicios/entities/servicio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  fecha_inicio: string;

  @Column('varchar', { length: 100, nullable: false })
  fin_reserva: string;

  @Column('varchar', { length: 15, nullable: false })
  tipo_de_habitacion: string;

  @Column()
  estado_de_la_reserva: string;

  @Column()
  precio_por_noche: string;

  @Column()
  descripcion: string;

  //habitacio-reserva
  @OneToOne(() => Habitacion, (habitacion) => habitacion.reserva)
  habitaciones: Habitacion;
  //pago-reserva
  @OneToOne(() => Pago, (pago) => pago.reserva)
  pago: Pago;
  //cliente-reserva
  @ManyToOne(() => Cliente, cliente => cliente.reserva)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;
  //personal-reserva
  @ManyToOne(() => Personal, personal => personal.reserva)
  @JoinColumn({ name: 'id_personal', referencedColumnName: 'id' })
  personal: Personal;

  @ManyToMany(() => Servicios, servicio => servicio.reserva)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  servicio: Servicios;
}
