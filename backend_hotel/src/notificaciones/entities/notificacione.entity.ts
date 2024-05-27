
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notificaciones')
export class Notificaciones {
  @PrimaryGeneratedColumn()
  id_notificacion: number;

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
}
