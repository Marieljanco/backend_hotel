import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { InterpretesModule } from './interpretes/interpretes.module';
// import { GenerosModule } from './generos/generos.module';
// import { AlbumesModule } from './albumes/albumes.module';
// import { CancionesModule } from './canciones/canciones.module';
// import { UsuariosModule } from './usuarios/usuarios.module';
// import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
import { PersonalModule } from './personal/personal.module';
import { ReservasModule } from './reservas/reservas.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { ServiciosModule } from './servicios/servicios.module';
import { CalendarioModule } from './calendario/calendario.module';
import { PagoModule } from './pago/pago.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //entities: [__dirname + '**/*.entity.ts'],
      entities: [Cliente],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientesModule,
    PersonalModule,
    ReservasModule,
    HabitacionesModule,
    ServiciosModule,
    CalendarioModule,
    PagoModule,
    NotificacionesModule,
    // InterpretesModule,
    // GenerosModule,
    // AlbumesModule,
    // CancionesModule,
    // UsuariosModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
