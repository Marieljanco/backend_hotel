<script setup lang="ts">
import type { Sugerencia } from '@/models/sugerencia'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var sugerencias = ref<Sugerencia[]>([])

async function getSugerencias() {
  sugerencias.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/sugerencias/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la Sugerencia?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getSugerencias())
  }
}

onMounted(() => {
  getSugerencias()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Sugerencias</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Sugerencias</h2>
      <div class="col-12">
        <RouterLink to="/sugerencias/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha Sugerencia</th>
            <!-- <th scope="col">Estado</th> -->
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sugerencia, index) in sugerencias.values()" :key="sugerencia.id">
            <th scope="row">{{ index + 1 }}</th>
            <!-- <td>{{ sugerencia.habitacion.tipoHabitacion }}</td> -->
            <!-- <td>{{ sugerencia.habitacion.cliente.nombre }}</td> -->
            <!-- <td>{{ sugerencia.fecha_reserva }}</td> -->
            <!-- <td>{{ sugerencia.fecha_entrada }}</td>
            <td>{{ sugerencia.fecha_salida }}</td> -->
            <!-- <td><a :href="sugerencia.url" target="_blank">Ver</a></td> -->
            <td>
              <button class="btn btn-link" @click="toEdit(sugerencia.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(sugerencia.id)">
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
