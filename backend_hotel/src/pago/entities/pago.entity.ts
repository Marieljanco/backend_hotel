<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
=======

import { Reserva } from 'src/reservas/entities/reserva.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
>>>>>>> de482662a88516915742c31558f30072dabbf59b

@Entity('pago')
export class Pago {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  monto: number;

  // @Column('varchar', { length: 100, nullable: false })
  // metodo_de_pago: string;

  @Column('varchar', { length: 15, nullable: false })
<<<<<<< HEAD
  estado_del_pago: string;
=======
  fecha: string;
  
  @Column('varchar', { length: 15, nullable: false })
  montodepago: string;

  @OneToOne(() => Reserva, reserva => reserva.pago)
  reserva: Reserva;

>>>>>>> de482662a88516915742c31558f30072dabbf59b
}
