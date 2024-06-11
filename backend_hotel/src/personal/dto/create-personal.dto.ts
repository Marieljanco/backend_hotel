import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePersonalDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(40, { message: 'El campo nombre no debe ser mayor a 40 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido no debe ser vacío' })
  @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
  @MaxLength(40, { message: 'El campo apellido no debe ser mayor a 40 caracteres' })
  @MinLength(2, { message: 'El campo apellido no debe ser menor a 2 caracteres' })
  readonly apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cargo no debe ser vacío' })
  @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo cargo no debe ser mayor a 50 caracteres' })
  @MinLength(2, { message: 'El campo cargo no debe ser menor a 2 caracteres' })
  readonly cargo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo salario no debe ser vacío' })
  @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
  readonly salario: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha de contratación no debe ser vacío' })
  @IsDate({ message: 'El campo fecha de contratación debe ser de tipo dato' })
  readonly fechaContratacion: Date;
}
