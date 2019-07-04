import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Voluntariado from '@/components/Voluntariado'
import Adopciones from '@/components/Adopciones'
import Formulario from '@/components/Formulario'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/voluntariado',
      name: 'voluntariado',
      component: Voluntariado
    },
    {
      path: '/adopciones',
      name: 'adopciones',
      component: Adopciones
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
  ]
})
