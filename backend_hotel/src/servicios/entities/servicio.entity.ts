import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('servicios')
export class Servicios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre_del_servicio: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column('varchar', { length: 15, nullable: false })
  disponibilidad: string;

  @Column('int', { nullable: false })
  duracion: number;
}
