import type { Reserva } from './reserva'

export interface Cliente {
  id: number
  tipoHabitacion: string
  estado_de_disponibilidad: string
  precio_por_hora: number
  
  reservas: Reserva[]
}