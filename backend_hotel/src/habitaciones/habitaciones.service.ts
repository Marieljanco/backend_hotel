import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habitacion } from './entities/habitacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HabitacionesService {
  constructor(
    @InjectRepository(Habitacion) private habitacionesRepository: Repository<Habitacion>,
  ) {}

  async create(createHabitacionDto: CreateHabitacionDto): Promise<Habitacion> {
    const existe = await this.habitacionesRepository.findOneBy({
      tipoHabitacion: createHabitacionDto.tipoHabitacion.trim(),
      //interprete: { id: createHabitacionDto.idInterprete }, //corregir ver relacion
      //numero: createHabitacionDto.numero,
    });

    if (existe) {
      throw new ConflictException('La habitación ya existe');
    }

    return this.habitacionesRepository.save({
      tipoHabitacion: createHabitacionDto.tipoHabitacion.trim(),
      //numero: createHabitacionDto.numero,
    });
  }

  async findAll(): Promise<Habitacion[]> {
    return this.habitacionesRepository.find();
  }

  //async findAllByGenero

  async findOne(id: number): Promise<Habitacion> {
    const habitacion = await this.habitacionesRepository.findOneBy({ id });
    if (!habitacion) {
      throw new NotFoundException(`La habitación ${id} no existe`);
    }
    return habitacion;
  }

  async update(id: number, updateHabitacionDto: UpdateHabitacionDto): Promise<Habitacion> {
    const habitacion = await this.findOne(id);
    const habitacionUpdate = Object.assign(habitacion, updateHabitacionDto);
    return this.habitacionesRepository.save(habitacionUpdate);
  }

  async remove(id: number) {
    const habitacion = await this.findOne(id);
    return this.habitacionesRepository.delete(habitacion.id);
  }
}