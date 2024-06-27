import type { Cliente } from './cliente'

export interface Sugerencia {
  id: number
  comentario: string
  // fecha_entrada:Date
  // fecha_salida:Date
  // estado: string

  // habitacion: Habitacion
  cliente: Cliente
  // pago: Pago
}
