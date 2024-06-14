import type { Cliente } from './cliente'
import type { Habitacion } from './habitacion'
import type { Pago } from './pago'

export interface Reserva {
  id: number
  fecha_reserva: Date
  fecha_entrada:Date
  fecha_salida:Date
  estado: string

  habitacion: Habitacion
  cliente: Cliente
  pago: Pago
}
