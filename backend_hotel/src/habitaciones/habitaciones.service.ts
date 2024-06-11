import { ConflictException, Injectable } from '@nestjs/common';
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
      interprete: { id: createHabitacionDto.idInterprete }, //corregir
    });

    if (existe) {
      throw new ConflictException('El álbum ya existe');
    }

    return this.habitacionesRepository.save({
      tipoHabitacion: createHabitacionDto.tipohabitacion.trim(),
      fechaLanzamiento: createHabitacionDto.fechaLanzamiento,
      interprete: { id: createHabitacionDto.idInterprete },
    });
  }

  async findAll(): Promise<Habitacion[]> {
    return this.habitacionesRepository.find({ relations: ['interprete'] });
  }

  async findAllByInterprete(idInterprete): Promise<Habitacion[]> {
    return this.habitacionesRepository.findBy({ interprete: { id: idInterprete } });
  }

  async findOne(id: number): Promise<Habitacion> {
    const album = await this.habitacionesRepository.findOne({
      where: { id },
      relations: ['interprete'],
    });
    if (!album) {
      throw new NotFoundException(`El álbum ${id} no existe`);
    }
    return album;
  }

  async update(id: number, updateHabitacionDto: UpdateHabitacionDto): Promise<Habitacion> {
    const album = await this.findOne(id);
    const albumUpdate = Object.assign(album, updateHabitacionDto);
    albumUpdate.interprete = { id: updateHabitacionDto.idInterprete } as Interprete;
    return this.habitacionesRepository.save(albumUpdate);
  }

  async remove(id: number) {
    const album = await this.findOne(id);
    return this.habitacionesRepository.delete(album.id);
  }
}
