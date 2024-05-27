import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal')
export class Personal {
  @PrimaryGeneratedColumn()
  ci: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  apellido: string;

  @Column('varchar', { length: 20, nullable: false })
  telefono: number;

  @Column('varchar', { length: 255, nullable: false })
  direccion: string;
}

