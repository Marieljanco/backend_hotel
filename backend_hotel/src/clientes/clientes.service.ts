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
      throw new ConflictException('El cliente ya existe');
    }

    return this.clientesRepository.save({
      nombre: createClienteDto.nombre.trim(),
      apellido: createClienteDto.apellido.trim(),
      telefono: createClienteDto.telefono,
    });
  }

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find();
  }
  //comentar 
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
    const cliente = await this.clientesRepository.findOneBy({ id });
    if (!cliente) {
      throw new NotFoundException(`El cliente ${id} no existe`);
    }
    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    const clienteUpdate = Object.assign(cliente, updateClienteDto);
    return this.clientesRepository.save(clienteUpdate);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clientesRepository.delete(cliente.id);
  }
}

