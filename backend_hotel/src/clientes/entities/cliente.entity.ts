import { Reserva } from 'src/reservas/entities/reserva.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  apellido: string;

  @Column('varchar', { length: 15, nullable: false })
  ci: string;

  @Column()
  telefono: number;

  @OneToMany(() => Reserva, reserva => reserva.cliente)
  reservas: Reserva[];
}
