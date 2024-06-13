import type { Cliente } from './cliente'
import type { Pago } from './pago'

export interface Reserva {
  id: number
  fecha_reserva: Date
  
  cliente: Cliente
  pago: Pago
}
