import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personal } from './entities/personal.entity';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal) private personalRepository: Repository<Personal>,
  ) {}

  async create(createPersonalDto: CreatePersonalDto): Promise<Personal> {
    const existe = await this.personalRepository.findOne({
      where: { 
        nombre: createPersonalDto.nombre.trim(), 
        apellido: createPersonalDto.apellido.trim() 
      },
    });

    if (existe) {
      throw new ConflictException('El personal ya existe');
    }

    //const personal = this.personalRepository.create(createPersonalDto);
    //return this.personalRepository.save(personal);
    return this.personalRepository.save({
      nombre: createPersonalDto.nombre.trim(),
      apellido: createPersonalDto.apellido.trim(),
      // album: { id: createCancionDto.idAlbum },
      // genero: { id: createCancionDto.idGenero },
    });
  }

  async findAll(): Promise<Personal[]> {
    return this.personalRepository.find({ relations: ['reserva'] });
  }

  async findOne(id: number): Promise<Personal> {
    const personal = await this.personalRepository.findOne({
      where: { id },
      relations: ['reserva'],
    });

    if (!personal) {
      throw new NotFoundException(`El personal con ID ${id} no existe`);
    }
    return personal;
  }

  async update(id: number, updatePersonalDto: UpdatePersonalDto): Promise<Personal> {
    const personal = await this.findOne(id);
    const personalUpdate = Object.assign(personal, updatePersonalDto);
    return this.personalRepository.save(personalUpdate);
  }

  async remove(id: number) {
    const personal = await this.findOne(id);
    return this.personalRepository.delete(personal.id);
  }
}
