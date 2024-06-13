import type { Reserva } from './reserva'

export interface Cliente {
  id: number
  ci: number
  nombre: string
  apellido: string
  
  reservas: Reserva[]
}
