import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Voluntariado from '@/components/Voluntariado'
import Adopciones from '@/components/Adopciones'
import Formulario from '@/components/Formulario'
import Adminadopciones from '@/components/Adminadopciones'
import Adminvoluntariado from '@/components/Adminvoluntariado'
import Admininicio from '@/components/Admininicio'
import Adminmascotas from '@/components/Adminmascotas'

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
    {
      path: '/admin',
      name: 'Admininicio',
      component: Admininicio
    },
    {
      path: '/admin/adopciones',
      name: 'Adminadopciones',
      component: Adminadopciones
    },
    {
      path: '/admin/voluntariado',
      name: 'Adminvoluntariado',
      component: Adminvoluntariado
    },
    {
      path: '/admin/mascotas',
      name: 'Adminmascotas',
      component: Adminmascotas
    }
  ]
})
