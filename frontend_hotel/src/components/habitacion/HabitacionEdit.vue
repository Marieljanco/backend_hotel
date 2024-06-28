<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const tipoHabitacion = ref('')
const estado_de_disponibilidad = ref('')
const precio_por_hora = ref('')
const telefono = ref('')
const id = router.currentRoute.value.params['id']

async function editarHabitacion() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      tipoHabitacion: tipoHabitacion.value,
      estado_de_disponibilidad: estado_de_disponibilidad.value,
      precio_por_hora: precio_por_hora.value
    })
    .then(() => router.push('/habitaciones'))
}

async function getHabitacion() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(tipoHabitacion.value = response.data.tipoHabitacion),
      (estado_de_disponibilidad.value = response.data.estado_de_disponibilidad),
      (precio_por_hora.value = response.data.precio_por_hora)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getHabitacion()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/habitaciones">Habitacion</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Habitaciones</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarHabitacion">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="tipoHabitacion" placeholder="tipoHabitacion" required />
          <label for="tipoHabitacion">tipoHabitacion</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="estado_de_disponibilidad"
            placeholder="estado_de_disponibilidad"
            required
          />
          <label for="estado_de_disponibilidad">estado_de_disponibilidad</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" v-model="precio_por_hora" placeholder="precio_por_hora" required />
          <label for="precio_por_hora">precio_por_hora</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Guardar
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
