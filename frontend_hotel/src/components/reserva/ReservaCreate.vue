<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Reserva } from '@/models/reserva'
import type { Habitacion } from '@/models/habitacion'
//import type { Album } from '@/models/album'
import type { Cliente } from '@/models/cliente'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const reserva = ref<Reserva>({} as Reserva)

const idHabitacion = ref<number>(0)
const idCliente = ref<number>(0)
//const idAlbum = ref<number>(0)

const habitaciones = ref<Habitacion[]>([])
const clientes = ref<Cliente[]>([])
const albumes = ref<Album[]>([])

async function crearReserva() {
  await http
    .post(ENDPOINT, {
      idHabitacion: idHabitacion.value,
      //idAlbum: idAlbum.value,
      fecha_reserva: reserva.value.fecha_reserva,
      fecha_entrada: reserva.value.fecha_entrada,
      fecha_salida: reserva.value.fecha_salida,
      estado: reserva.value.fecha_salida
    })
    .then(() => router.push('/reservas'))
}

async function obtenerClientes() {
  clientes.value = await http.get('clientes/habitacion/' + idHabitacion.value).then((res) => res.data)
}

// async function obtenerAlbumes() {
//   albumes.value = await http.get('albumes/cliente/' + idCliente.value).then((res) => res.data)
// }

onMounted(async () => {
  habitaciones.value = await http.get('habitaciones').then((res) => res.data)
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
          <RouterLink to="/clientes">Reservas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Reservas</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearReserva">
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idHabitacion" required @change="obtenerClientes">
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="habitacion in habitaciones" :key="habitacion.id" :value="habitacion.id">
              {{ habitacion.descripcion }}
            </option>
          </select>
          <label for="habitacion">Habitaciones</label>
        </div>
        <div class="form-floating mb-2">
          <!-- <select class="form-select" v-model="idCliente" required @change="obtenerAlbumes">
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
              {{ cliente.fecha_reserva }}
            </option>
          </select> -->
          <label for="cliente">Clientes</label>
        </div>
        <!-- <div class="form-floating mb-2">
          <select class="form-select" v-model="idAlbum" required>
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option v-for="album in albumes" :key="album.id" :value="album.id">
              {{ album.fecha_reserva }}
            </option>
          </select>
          <label for="album">Álbum</label>
        </div> -->
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="reserva.fecha_reserva"
            placeholder="Fecha_reserva"
            required
          />
          <label for="fecha_reserva">Fecha_reserva</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="reserva.fecha_entrada"
            placeholder="Fecha_entrada"
            required
          />
          <label for="fecha_entrada">Fecha_entrada</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="reserva.fecha_salida"
            placeholder="Fecha_salida"
            required
          />
          <label for="fecha_salida">Fecha_salida</label>
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

<style></style>
