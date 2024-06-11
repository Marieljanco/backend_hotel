import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateReservaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha_reserva no debe ser vacío' })
  @IsDate({ message: 'El campo fecha_reserva debe ser de tipo fecha' })
  readonly fecha_reserva: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha_entrada no debe ser vacío' })
  @IsDate({ message: 'El campo fecha_entrada debe ser de tipo fecha' })
  readonly fecha_entrada: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha_salida no debe ser vacío' })
  @IsDate({ message: 'El campo fecha_salida debe ser de tipo fecha' })
  readonly fecha_salida: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo estado no debe ser vacío' })
  @IsString({ message: 'El campo estado debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo estado no debe ser mayor a 50 caracteres' })
  @MinLength(2, { message: 'El campo estado no debe ser menor a 2 caracteres' })
  readonly estado: string;
}
