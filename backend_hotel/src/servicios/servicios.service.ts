import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicios } from './entities/servicio.entity';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicios)
    private readonly serviciosRepository: Repository<Servicios>,
  ) {}

  async create(createServicioDto: CreateServicioDto): Promise<Servicios> {
    const existe = await this.serviciosRepository.findOne({
      where: { descripcion: createServicioDto.descripcion.trim() },
    });

    if (existe) {
      throw new ConflictException('El servicio ya existe');
    }

    const servicio = this.serviciosRepository.create(createServicioDto);
    return this.serviciosRepository.save(servicio);
  }

  findAll(): Promise<Servicios[]> {
    return this.serviciosRepository.find();
  }

  async findOne(id: number): Promise<Servicios> {
    const servicio = await this.serviciosRepository.findOneBy({ id });

    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    }

    return servicio;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicios> {
    const servicio = await this.findOne(id);
    Object.assign(servicio, updateServicioDto);
    return this.serviciosRepository.save(servicio);
  }

  async remove(id: number):{
    const servicio = await this.findOne(id);
    return this.serviciosRepository.delete(servicio.id);
  }
}
