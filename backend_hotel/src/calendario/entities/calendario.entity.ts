import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendario')
export class Calendario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  fecha: string;

  @Column('varchar', { length: 100, nullable: false })
  horario: string;

  @Column('varchar', { length: 15, nullable: false })
  disponibilidad: string;

  
}

