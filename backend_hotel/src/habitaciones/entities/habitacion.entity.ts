import { Reserva } from 'src/reservas/entities/reserva.entity';
import { Servicios } from 'src/servicios/entities/servicio.entity';
import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToOne,
  ManyToMany,
  JoinTable
} from 'typeorm';

@Entity('habitaciones')
export class Habitacion {
  @PrimaryGeneratedColumn()
  numero_habitacion: number;

  @Column('varchar', { length: 100, nullable: false })
  tipo_habitacion: string;

  @Column('varchar', { length: 100, nullable: false })
  estado_de_disponibilidad: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio_por_noche: number;

  @Column('varchar', { nullable: false })
  descripcion: string;
  reserva: any;
//reserva habitacion
  @OneToOne(() => Reserva, reserva => reserva.habitaciones)
  reservas: Reserva[];
  //servi habi
  @ManyToMany(() => Servicios, servicios => servicios.habitacion)
  @JoinTable(/*{ name: 'id_habitacion', referencedColumnName: 'id' }*/ )
  servicio: Servicios;
}
