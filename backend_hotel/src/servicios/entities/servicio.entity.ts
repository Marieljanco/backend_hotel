import { Entity, Column } from 'typeorm';

@Entity('servicios')
export class Servicios {
  @Column('varchar', { length: 100, nullable: false })
  nombre_del_servicio: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion: string;

  @Column('varchar', { length: 100, nullable: false })
  precio: string;

  @Column('varchar', { length: 15, nullable: false })
  disponibilidad: string;

  @Column('int', { nullable: false })
  duracion: number;
}
