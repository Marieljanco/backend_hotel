<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Reserva } from '@/models/reserva'
//import type { Genero } from '@/models/genero'
import type { Habitacion } from '@/models/habitacion'
//import type { Interprete } from '@/models/interprete'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const reserva = ref<Reserva>({} as Reserva)

//const idGenero = ref<number>(0)
//const idInterprete = ref<number>(0)
const idHabitacion = ref<number>(0)

//const generos = ref<Genero[]>([])
//const interpretes = ref<Interprete[]>([])
const habitaciones = ref<Habitacion[]>([])

async function crearHabitacion() {
  await http
    .post(ENDPOINT, {
      //idGenero: idGenero.value,
      idHabitacion: idHabitacion.value,
      tipohabitacion: habitacion.value.tipohabitacion,
      estado_de_disponibilidad: habitacion.value.estado_de_disponibilidad,
      precio_por_hora: habitacion.value.precio_por_hora,
    })
    .then(() => router.push('/reservas'))
}

// async function obtenerInterpretes() {
//   interpretes.value = await http.get('interpretes/genero/' + idGenero.value).then((res) => res.data)
// }

async function obtenerHabitaciones() {
  habitaciones.value = await http.get('habitaciones/interprete/' + idInterprete.value).then((res) => res.data)
}

onMounted(async () => {
  generos.value = await http.get('generos').then((res) => res.data)
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
          <!-- <RouterLink to="/interpretes">Habitaciones</RouterLink> -->
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Reserva</h2>
    </div>

    <!-- <div class="row">
      <form @submit.prevent="crearHabitacion">
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idGenero" required @change="obtenerInterpretes">
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="genero in generos" :key="genero.id" :value="genero.id">
              {{ genero.descripcion }}
            </option>
          </select>
          <label for="genero">Géneros</label>
        </div> -->
        <!-- <div class="form-floating mb-2">
          <select class="form-select" v-model="idInterprete" required @change="obtenerHabitaciones">
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="interprete in interpretes" :key="interprete.id" :value="interprete.id">
              {{ interprete.tipohabitacion }}
            </option>
          </select>
          <label for="interprete">Intérpretes</label>
        </div> -->
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idHabitacion" required>
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="habitacion in habitaciones" :key="habitacion.id" :value="habitacion.id">
              {{ habitacion.tipohabitacion }}
            </option>
          </select>
          <label for="habitacion">Habitacion</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="habitacion.tipohabitacion"
            placeholder="Tipohabitacion"
            required
          />
          <label for="tipohabitacion">Tipohabitacion</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="habitacion.estado_de_disponibilidad"
            placeholder="Estado_de_disponibilidad"
            required
          />
          <label for="estado_de_disponibilidad">Estado_de_disponibilidad</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="habitacion.precio_por_hora"
            placeholder="Tags"
            required
          />
          <label for="precio_por_hora">Tags</label>
        </div>
        <!-- <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="reserva.url"
            placeholder="URL"
            required
          />
          <label for="url">URL</label>
        </div> -->
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

<style></style>
