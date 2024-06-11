import { Reserva } from 'src/reservas/entities/reserva.entity';
<<<<<<< HEAD
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
=======
import { 
  Column, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn 
} from 'typeorm';
>>>>>>> de482662a88516915742c31558f30072dabbf59b

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15, nullable: false })
  ci: string;

  @Column('varchar', { length: 50, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  apellido: string;

  @Column('int', { nullable: false })
  telefono: number;
<<<<<<< HEAD

  @OneToMany(() => Reserva, reserva => reserva.cliente)
  reservas: Reserva[];
=======
  
  //reserva- clietne
  @OneToMany(() => Reserva, reserva => reserva.cliente)
  reserva: Reserva[];
  //notis- clietne

>>>>>>> de482662a88516915742c31558f30072dabbf59b
}
