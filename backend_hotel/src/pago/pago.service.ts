import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago) private pagosRepository: Repository<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const pago = this.pagosRepository.create(createPagoDto);
    return this.pagosRepository.save(pago);
  }

  async findAll(): Promise<Pago[]> {
    return this.pagosRepository.find();
  }

  async findOne(id_transacion: number): Promise<Pago> {
    const pago = await this.pagosRepository.findOneBy({ id_transacion });
    if (!pago) {
      throw new NotFoundException(`El pago con ID ${id_transacion} no existe`);
    }
    return pago;
  }

  async update(id_transacion: number, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    const pago = await this.findOne(id_transacion);
    const pagoUpdate = Object.assign(pago, updatePagoDto);
    return this.pagosRepository.save(pagoUpdate);
  }

  async remove(id_transacion: number): {
    const pago = await this.findOne(id_transacion);
    return this.pagosRepository.delete(pago.id_transacion);
  }
}
