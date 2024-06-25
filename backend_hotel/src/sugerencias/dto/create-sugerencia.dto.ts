import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, IsDateString } from "class-validator";

export class CreateSugerenciaDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo comentario no debe ser vacío' })
  @IsString({ message: 'El campo comentario debe ser de tipo cadena' })
  readonly comentario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha debe ser una fecha válida en formato ISO' })
  readonly fecha: Date;
}
