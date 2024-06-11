import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Habitacion } from 'src/habitaciones/entities/habitacion.entity';
<<<<<<< HEAD
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('reserva')
=======
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
>>>>>>> de482662a88516915742c31558f30072dabbf59b
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

  @ManyToOne(() => Cliente, cliente => cliente.reservas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

<<<<<<< HEAD
  @ManyToOne(() => Habitacion, habitacion => habitacion.reservas)
  @JoinColumn({ name: 'numero_habitacion' })
  habitacion: Habitacion;
=======
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
>>>>>>> de482662a88516915742c31558f30072dabbf59b
}
