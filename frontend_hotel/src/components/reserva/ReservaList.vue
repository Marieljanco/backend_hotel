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

async function getReservas() {
  reservas.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/reservas/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Reserva?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getReservas())
  }
}

onMounted(() => {
  getReservas()
})
</script>

<template>
  <div class="container">
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
            <th scope="col">Habitacion</th>
            <th scope="col">Cliente</th>
            <th scope="col">fecha_reserva</th>
            <th scope="col">fecha_entrada</th>
            <th scope="col">fecha_salida</th>
            <th scope="col">estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reserva, index) in reservas.values()" :key="reserva.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ reserva.habitacion.tipoHabitacion }}</td>
            <td>{{ reserva.habitacion.cliente.nombre }}</td>
            <td>{{ reserva.fecha_reserva }}</td>
            <td>{{ reserva.fecha_entrada }}</td>
            <td>{{ reserva.fecha_salida }}</td>
            <td><a :href="reserva.url" target="_blank">Ver</a></td>
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
