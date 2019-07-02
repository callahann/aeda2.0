import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Voluntariado from '@/components/Voluntariado'
import Adopciones from '@/components/Adopciones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/voluntariado',
      name: 'Voluntariado',
      component: Voluntariado
    },
    {
      path: '/adopciones',
      name: 'Adopciones',
      component: Adopciones
    },
  ]
})
