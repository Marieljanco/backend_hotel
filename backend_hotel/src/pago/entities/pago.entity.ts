
import { Reserva } from 'src/reservas/entities/reserva.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pago')
export class Pago {
  @PrimaryGeneratedColumn()
  id_transacion: number;

  @Column('varchar', { length: 100, nullable: false })
  monto: number;

  @Column('varchar', { length: 100, nullable: false })
  metodo_de_pago: string;

  @Column('varchar', { length: 15, nullable: false })
  estado_del_pago: string;
  
  @OneToOne(() => Reserva, reserva => reserva.pago)
  reserva: Reserva;

}

