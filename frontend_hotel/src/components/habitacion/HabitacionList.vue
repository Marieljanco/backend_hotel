<script setup lang="ts">
import type { Habitacion } from '@/models/habitacion'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var habitaciones = ref<Habitacion[]>([])

// async function getHabitaciones() {
//   try {
//     const response = await http.get(ENDPOINT)
//     habitaciones.value = response.data
//   } catch (error) {
//     console.error('Error al obtener las habitaciones:', error)
//   }
// }
async function getHabitaciones() {
  habitaciones.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/habitaciones/editar/${id}`)
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar la Habitacion?')
  if (r) {
    try {
      await http.delete(`${ENDPOINT}/${id}`)
      await getHabitaciones()
    } catch (error) {
      console.error('Error al eliminar la habitacion:', error)
    }
  }
}

onMounted(() => {
  getHabitaciones()
})
</script>

<template>
  <div class="container">
    <!-- Encabezado y navegación -->
    <!-- Resto del contenido de tu componente -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Habitaciones</li>
      </ol>
    </nav>
    <div class="row">
      <h2>Lista de Habitaciones</h2>
      <div class="col-12">
        <RouterLink to="/habitaciones/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Tipos de Habitacion</th>
            <th scope="col">estados de disponibilidad</th>
            <th scope="col">Precio por hora</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(habitacion, index) in habitaciones" :key="habitacion.id">
            <th scope="row">{{ index + 1 }}</th>
            <!-- Ajusta según la estructura de tu Habitacion -->
            <td>{{ habitacion.tipoHabitacion }}</td>
            <!-- Ajusta según la estructura de tu Habitacion -->
            <td>{{ habitacion.estado_de_disponibilidad }}</td>
            <!-- Ajusta según la estructura de tu Habitacion -->
            <td>{{ habitacion.precio_por_hora }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(habitacion.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(habitacion.id)">
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
