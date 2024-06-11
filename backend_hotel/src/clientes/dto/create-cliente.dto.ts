import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido no debe ser vacío' })
  @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo apellido no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo apellido no debe ser menor a 2 caracteres' })
  readonly apellido: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo número' })
  @Min(1000000000, { message: 'El campo telefono debe tener al menos 10 dígitos' })
  @MaxLength(9999999999, { message: 'El campo telefono no debe ser mayor a 10 dígitos' })
  readonly telefono: number;
}