import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calendario } from './entities/calendario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarioService {
  create(createCalendarioDto: CreateCalendarioDto) {
    return 'This action adds a new calendario';
  }

  findAll() {
    return `This action returns all calendario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calendario`;
  }

  update(id: number, updateCalendarioDto: UpdateCalendarioDto) {
    return `This action updates a #${id} calendario`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendario`;
  }
}
