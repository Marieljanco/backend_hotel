<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const tipoHabitacion = ref('')
const estado_de_disponibilidad = ref('')
const precio_por_hora = ref('')

async function crearHabitacion() {
  await http
    .post(ENDPOINT, {
      tipoHabitacion: tipoHabitacion.value,
      precio_por_hora: precio_por_hora.value,
      estado_de_disponibilidad: estado_de_disponibilidad.value
    })
    .then(() => router.push('/habitaciones'))
}

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
          <RouterLink to="/habitaciones">Habitaciones</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Habitacion</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearHabitacion">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="tipoHabitacion"
            placeholder="tipoHabitacion"
            required
          />
          <label for="tipoHabitacion">Tipo Habitacion</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precio_por_hora"
            placeholder="precio_por_hora"
            required
          />
          <label for="precio_por_hora">Precio por hora</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="estado_de_disponibilidad"
            placeholder="estado_de_disponibilidad"
            required
          />
          <label for="estado_de_disponibilidad">Estado de disponibilidad</label>
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
