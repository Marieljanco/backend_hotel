<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Sugerencia } from '@/models/sugerencia'
import type { Cliente } from '@/models/cliente'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const sugerencia = ref<Sugerencia>({} as Sugerencia)

const idCliente = ref<number>(0)
const clientes = ref<Cliente[]>([])

async function crearSugerencia() {
  await http
    .post(ENDPOINT, {
      idCliente: idCliente.value,
      comentario: sugerencia.value.comentario
    })
    .then(() => router.push('/sugerencias'))
}

async function obtenerClientes() {
  clientes.value = await http.get('clientes').then((res) => res.data)
}

onMounted(async () => {
  await obtenerClientes()
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
          <RouterLink to="/sugerencias">Sugerencias</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nueva Sugerencia</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearSugerencia">
        <div class="form-floating mb-2">
          <select class="form-select" v-model="idCliente" required>
            <option value="" disabled>Seleccione un cliente</option>
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
              {{ cliente.nombre }}
            </option>
          </select>
          <label for="cliente">Clientes</label>
        </div>
        <div class="form-floating mb-2">
          <input
            type="text"
            class="form-control"
            v-model="sugerencia.comentario"
            placeholder="Comentario"
            required
          />
          <label for="comentario">Comentario</label>
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
