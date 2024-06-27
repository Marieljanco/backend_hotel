<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const apellido = ref('')
const ci = ref('')
const telefono = ref('')

async function crearCliente() {
  await http
    .post(ENDPOINT, { nombre: nombre.value, apellido: apellido.value, ci: ci.value, telefono: telefono.value })
    .then(() => router.push('/clientes'))
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
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCliente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="apellido"
            placeholder="Apellido"
            required
          />
          <label for="apellido">Apellido</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="ci"
            placeholder="Ci"
            required
          />
          <label for="ci">Ci</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="telefono"
            placeholder="Telefono"
            required
          />
          <label for="telefono">Telefono</label>
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
