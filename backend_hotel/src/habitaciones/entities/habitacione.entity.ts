import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habitacion } from './entities/habitacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HabitacionService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,
  ) {}

  async create(createHabitacionDto: CreateHabitacionDto): Promise<Habitacion> {
    const habitacion = this.habitacionRepository.create(createHabitacionDto);
    return this.habitacionRepository.save(habitacion);
  }

  async findAll(): Promise<Habitacion[]> {
    return this.habitacionRepository.find();
  }

  async findOne(id: number): Promise<Habitacion> {
    return this.habitacionRepository.findOne(id);
  }

  async update(id: number, updateHabitacionDto: UpdateHabitacionDto): Promise<Habitacion> {
    await this.habitacionRepository.update(id, updateHabitacionDto);
    return this.habitacionRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.habitacionRepository.delete(id);
  }
}
