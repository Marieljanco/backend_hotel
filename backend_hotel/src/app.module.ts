import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
//import { Cliente } from './clientes/entities/cliente.entity';
import { PersonalModule } from './personal/personal.module';
import { ReservasModule } from './reservas/reservas.module';
import { HabitacionesModule } from './habitaciones/habitaciones.module';
import { ServiciosModule } from './servicios/servicios.module';

import { PagoModule } from './pago/pago.module';


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
      entities: [__dirname + '**/*.entity.ts'],
      //entities: [Cliente],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientesModule,
    PersonalModule,
    ReservasModule,
    HabitacionesModule,
    ServiciosModule,
    PagoModule,
    // UsuariosModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
