import type { Reserva } from "./reserva"

export interface Pago {
  id: number
  monto: number
  fecha: Date
  metodo_de_pago: string
  
  reserva: Reserva
}
