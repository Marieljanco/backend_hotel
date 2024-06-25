import { Module } from '@nestjs/common';
import { SugerenciaService } from './sugerencia.service';
import { SugerenciaController } from './sugerencia.controller';
import { Sugerencia } from './entities/sugerencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sugerencia])],
  controllers: [SugerenciaController],
  providers: [SugerenciaService],
})
export class SugerenciaModule {}
