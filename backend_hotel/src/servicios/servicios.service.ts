import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reposytory } from 'typeorm';
import { Genero } from './entities/servicio.entity';

@Injectable()
export class ServiciosService {
  constructor(@InjectRepository(Servicio) private serviciosRepository: Repository<Genero>) {}
  async create(createServicioDto: CreateServicioDto): Promise<Genero> {
    const existe = await this.serviciosRepository.findOneBy({
      descripcion: createServiciosDto.descripcion.trim(),
    });
    return 'This action adds a new servicio';
  }

  findAll() {
    return `This action returns all servicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  update(id: number, updateServicioDto: UpdateServicioDto) {
    return `This action updates a #${id} servicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicio`;
  }
}
