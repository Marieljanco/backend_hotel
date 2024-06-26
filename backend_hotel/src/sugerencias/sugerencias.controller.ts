import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SugerenciasService } from './sugerencias.service';
import { CreateSugerenciaDto } from './dto/create-sugerencia.dto';
import { UpdateSugerenciaDto } from './dto/update-sugerencia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('sugerencias')
@Controller('sugerencias')
export class SugerenciasController {
  constructor(private readonly sugerenciasService: SugerenciasService) {}

  @Post()
  create(@Body() createSugerenciaDto: CreateSugerenciaDto) {
    return this.sugerenciasService.create(createSugerenciaDto);
  }

  @Get()
  findAll() {
    return this.sugerenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sugerenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSugerenciaDto: UpdateSugerenciaDto) {
    return this.sugerenciasService.update(+id, updateSugerenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sugerenciasService.remove(+id);
  }
}
