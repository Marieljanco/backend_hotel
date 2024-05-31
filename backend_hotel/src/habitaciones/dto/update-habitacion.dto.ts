import { PartialType } from '@nestjs/swagger';
import { CreateHabitacioneDto } from './create-habitacion.dto';

export class UpdateHabitacioneDto extends PartialType(CreateHabitacioneDto) {}
