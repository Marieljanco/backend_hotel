import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habitaciones')
export class Habitaciones {
  @PrimaryGeneratedColumn()
  numero_habitacion: number;

  @Column('varchar', { length: 100, nullable: false })
  tipo_habitacion: string;

  @Column('varchar', { length: 100, nullable: false })
  estado_de_disponibilidad: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio_por_noche: number;

  @Column('text', { nullable: false })
  descripcion: string;
}
