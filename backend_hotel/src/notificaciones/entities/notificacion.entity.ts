
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Personal } from 'src/personal/entities/personal.entity';
import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity('notificaciones')
export class Notificaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  destinatario: string;
 
  @Column('varchar', { length: 100, nullable: false })
  tipo_de_notificacion: string; 

  @Column('varchar', { length: 15, nullable: false })
  contenido_de_notificacion: string;

  @Column()
  fecha: string;

  @Column()
  hora_de_envio: string;
  //notis-cliente
  @ManyToOne(() => Cliente, cliente => cliente.notificaciones)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;
  //notis-personal
  @ManyToOne(() => Personal, personal => personal.notificaciones)
  @JoinColumn({ name: 'id_personal', referencedColumnName: 'id' })
  personal: Personal;
}
