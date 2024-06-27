<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const fecha_reserva = ref('')
const fecha_entrada = ref('')
const comentario = ref('')
const id = router.currentRoute.value.params['id']

async function editarSugerencia() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      comentario: comentario.value
    })
    .then(() => router.push('/sugerencias'))
}

async function getSugerencia() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    comentario.value = response.data.comentario
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getSugerencia()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/sugerencias">Sugerencias</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Sugerencia</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarSugerencia">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="fecha_reserva"
            placeholder="Fecha Reserva"
            required
          />
          <label for="fecha_reserva">Fecha Reserva</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="fecha_entrada"
            placeholder="Fecha Entrada"
            required
          />
          <label for="fecha_entrada">Fecha Entrada</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="comentario"
            placeholder="Comentario"
            required
          />
          <label for="comentario">Comentario</label>
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

<style scoped></style>
