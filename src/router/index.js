import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Voluntariado from '@/components/Voluntariado'
import Adopciones from '@/components/Adopciones'
import Adminadopciones from '@/components/Adminadopciones'
import Adminvoluntariado from '@/components/Adminvoluntariado'
import Admininicio from '@/components/Admininicio'


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
      name: 'Adminadopciones',
      component: Adminvoluntariado
    },
  ]
})
