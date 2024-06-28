import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores'
import { getTokenFromLocalStorage } from '@/helpers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/login', name: 'login', component: LoginView },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: () => import('../views/ReservaView.vue'),
      children: [
        { path: '', component: () => import('../components/reserva/ReservaList.vue') },
        { path: 'crear', component: () => import('../components/reserva/ReservaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/reserva/ReservaEdit.vue')
        }
      ]
    },
    {
      path: '/habitaciones',
      name: 'habitaciones',
      component: () => import('../views/HabitacionView.vue'),
      children: [
        { path: '', component: () => import('../components/habitacion/HabitacionList.vue') },
        { path: 'crear', component: () => import('../components/habitacion/HabitacionCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/habitacion/HabitacionEdit.vue')
        }
      ]
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (authRequired && !getTokenFromLocalStorage()) {
    if (authStore) authStore.logout()
    authStore.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
