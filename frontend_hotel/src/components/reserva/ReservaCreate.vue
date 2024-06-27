<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Reserva } from '@/models/reserva'
import type { Habitacion } from '@/models/habitacion'
import type { Cliente } from '@/models/cliente'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const reserva = ref<Reserva>({} as Reserva)

const idHabitacion = ref<number>(0)
const idCliente = ref<number>(0)

const habitaciones = ref<Habitacion[]>([])
const clientes = ref<Cliente[]>([])

async function crearReserva() {
  try {
    await http.post(ENDPOINT + '/reservas', {
      idHabitacion: idHabitacion.value,
      idCliente: idCliente.value,
      fecha_entrada: reserva.value.fecha_entrada,
      fecha_salida: reserva.value.fecha_salida,
      estado: reserva.value.estado
    })
    router.push('/reservas')
  } catch (error) {
    console.error('Error al crear la reserva:', error)
  }
}

async function obtenerClientes() {
  try {
    const response = await http.get('clientes')
    clientes.value = response.data
  } catch (error) {
    console.error('Error al obtener los clientes:', error)
  }
}

onMounted(async () => {
  try {
    const response = await http.get('habitaciones')
    habitaciones.value = response.data
  } catch (error) {
    console.error('Error al obtener las habitaciones:', error)
  }
})

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/reservas">Reservas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Reserva</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearReserva">
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idHabitacion" required @change="obtenerClientes">
            <option value="" disabled>Seleccione un tipo de habitacion</option>
            <option v-for="habitacion in habitaciones" :key="habitacion.id" :value="habitacion.id">
              {{ habitacion.tipoHabitacion }}
            </option>
          </select>
          <label for="habitacion">Habitaciones</label>
        </div>
        <!-- Selector de Clientes -->
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idCliente" required>
            <option value="" disabled>Seleccione un cliente</option>
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
              {{ cliente.nombre + ' ' + cliente.apellido }}
            </option>
          </select>
          <label for="cliente">Clientes</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="date"
            class="form-control"
            v-model="reserva.fecha_entrada"
            placeholder="Fecha Entrada"
            required
          />
          <label for="fecha_entrada">Fecha Entrada</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="date"
            class="form-control"
            v-model="reserva.fecha_salida"
            placeholder="Fecha Salida"
            required
          />
          <label for="fecha_salida">Fecha Salida</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="reserva.estado"
            placeholder="Estado"
            required
          />
          <label for="estado">Estado</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style scoped></style>
