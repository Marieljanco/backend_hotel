<!-- <script setup lang="ts"></script>

<template><h1>Editar Reserva</h1></template>

<style scoped></style> -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''

const fecha_entrada = ref('')
const fecha_salida = ref('')
const id = router.currentRoute.value.params['id']

async function editarReserva() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      fecha_salida: fecha_salida.value, //esto era nombre
      fecha_entrada: fecha_entrada.value
    })
    .then(() => router.push('/reservas'))
}

async function getReserva() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(fecha_salida.value = response.data.fecha_salida),
      (fecha_entrada.value = response.data.fecha_entrada)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getReserva()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/reservas">Reservas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Reserva</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarReserva">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            v-model="fecha_entrada"
            placeholder="Fecha Entrada"
            required
          />
          <label for="fecha_entrada">Fecha Entrada</label>
        </div>
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            v-model="fecha_salida"
            placeholder="Fecha salida"
            required
          />
          <label for="fecha_salida">Fecha salida</label>
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
