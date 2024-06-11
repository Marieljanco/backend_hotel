import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const existe = await this.reservaRepository.findOne({
      where: { 
        fecha_reserva: createReservaDto.fecha_reserva,
        cliente: { id: createReservaDto.clienteId }
      },
    });

    if (existe) {
      throw new ConflictException('La reserva ya existe');
    }

    const reserva = this.reservaRepository.create(createReservaDto);
    return this.reservaRepository.save(reserva);
  }

  async findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({ 
      relations: ['cliente', 'habitacion', 'pago', 'personal', 'servicio'] 
    });
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOne({
      where: { id },
      relations: ['cliente', 'habitacion', 'pago', 'personal', 'servicio'],
    });

    if (!reserva) {
      throw new NotFoundException(`La reserva con ID ${id} no existe`);
    }
    return reserva;
  }

  async update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);
    Object.assign(reserva, updateReservaDto);
    return this.reservaRepository.save(reserva);
  }

  async remove(id: number): {
    const reserva = await this.findOne(id);
    return this.reservaRepository.delete(reserva.id);
  }
}
