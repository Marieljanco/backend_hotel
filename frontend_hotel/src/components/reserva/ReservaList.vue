<script setup lang="ts">
import type { Reserva } from '@/models/reserva'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var reservas = ref<Reserva[]>([])

// async function getReservas() {
//   reservas.value = await http.get(ENDPOINT).then((response) => response.data)
// }
async function getReservas() {
  try {
    const response = await http.get(ENDPOINT)
    reservas.value = response.data
  } catch (error) {
    console.error('Error al obtener las reservas:', error)
  }
}

function toEdit(id: number) {
  router.push(`/reservas/editar/${id}`)
}

// async function toDelete(id: number) {
//   var r = confirm('¿Está seguro que se desea eliminar la Reserva?')
//   if (r == true) {
//     await http.delete(`${ENDPOINT}/${id}`).then(() => getReservas())
//   }
// }
async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar la Reserva?')
  if (r) {
    try {
      await http.delete(`${ENDPOINT}/${id}`)
      await getReservas()
    } catch (error) {
      console.error('Error al eliminar la reserva:', error)
    }
  }
}

onMounted(() => {
  getReservas()
})
</script>

<template>
  <div class="container">
    <!-- Encabezado y navegación -->
    <!-- Resto del contenido de tu componente -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Reservas</li>
      </ol>
    </nav>
    <div class="row">
      <h2>Lista de Reservas</h2>
      <div class="col-12">
        <RouterLink to="/reservas/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Cliente</th>
            <th scope="col">Habitacion</th>
            <th scope="col">Fecha Reserva</th>
            <th scope="col">Fecha Entrada</th>
            <th scope="col">Fecha Salida</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reserva, index) in reservas" :key="reserva.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ reserva.cliente }}</td>
            <!-- Ajusta según la estructura de tu Reserva -->
            <td>{{ reserva.habitacion }}</td>
            <!-- Ajusta según la estructura de tu Reserva -->
            <td>{{ reserva.fecha_reserva }}</td>
            <!-- Ajusta según la estructura de tu Reserva -->
            <td>{{ reserva.fecha_entrada }}</td>
            <td>{{ reserva.fecha_salida }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(reserva.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(reserva.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
