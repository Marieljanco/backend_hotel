
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservas')
export class Reservas {
  @PrimaryGeneratedColumn()
  id_de_reserva: number;

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
}
