import { PartialType } from '@nestjs/swagger';
import { CreateHabitacioneDto } from './create-habitacione.dto';

export class UpdateHabitacioneDto extends PartialType(CreateHabitacioneDto) {}
