import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>,
  ) {}
  
  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const existe = await this.clientesRepository.findOneBy({
      nombre: createClienteDto.nombre.trim(),
      apellido: createClienteDto.apellido.trim(),
      telefono: createClienteDto.telefono,
    });

    if (existe) {
      throw new ConflictException('El intérprete ya existe');
    }

    return this.clientesRepository.save({
      nombre: createClienteDto.nombre.trim(),
      telefono: createClienteDto.telefono,
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }

  // async findAllByGenero(idGenero: number): Promise<Cliente[]> {
  //   return this.clientesRepository
  //     .createQueryBuilder('clientes')
  //     .innerJoin('clientes.albumes', 'albumes')
  //     .innerJoin('albumes.canciones', 'canciones')
  //     .innerJoin('canciones.genero', 'genero')
  //     .where('genero.id = :idGenero', { idGenero })
  //     .getMany();
  // }

  async findOne(id: number): Promise<Cliente> {
    const interprete = await this.clientesRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe`);
    }
    return interprete;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const interprete = await this.findOne(id);
    const interpreteUpdate = Object.assign(interprete, updateClienteDto);
    return this.clientesRepository.save(interpreteUpdate);
  }

  async remove(id: number) {
    const interprete = await this.findOne(id);
    return this.clientesRepository.delete(interprete.id);
  }
}

