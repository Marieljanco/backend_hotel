import { Cliente } from 'src/reservas/entities/reserva.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  OneToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('sugerencias')
export class Sugerencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  comentario: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha: Date;

 
  @OneToOne(() => Cliente, cliente => cliente.pago)
  cliente: Cliente;

}


