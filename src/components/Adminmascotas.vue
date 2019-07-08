<template>
 

	<div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading text-left"><b>Solicitudes</b></div>
      <div class="list-group list-group-flush ">
          <a href="#/admin/adopciones" class="list-group-item list-group-item-action bg-light text-left"><i class="fas fa-dog"></i> Adopciones</a>
          <a href="#/admin/voluntariado" class="list-group-item list-group-item-action bg-light text-left"><i class="fas fa-hand-holding-heart"></i> Voluntariado</a>
          <a href="#" class="list-group-item list-group-item-action bg-light text-left"><i class="fas fa-coins"></i> Donaciones</a>
        <a href="#/admin/mascotas" class="sidebar-heading list-group-item list-group-item-action bg-light text-left" id="mascotas"><b>Mascotas</b></a>
      </div>
    </div>
    <!-- /#sidebar-wrapper --> 

    <!-- Page Content -->
    <div id="page-content-wrapper">

      

      <div class="container-fluid" style="margin-top: 20px;">
        <div class="row" style="margin-bottom: 10px;">
          <h1 class="col-md-2">Mascotas</h1>
          <div class="col-md-8"></div>
        <button class="btn btn-primary pull-right col-md-2" style="color: white;"><i class="fas fa-plus"></i> Agregar mascota</button>
        </div>
        	<table class="table">
			  <thead>
			    <tr>
			      <th scope="col"></th>
			      <th scope="col">Nombre</th>
            <th class="col">Descripción</th>
			      <th scope="col"> </th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="perro in perros" style="vertical-align: middle !important;">
			      <td><img :src=perro.url class=" " alt="..." style="width: 90px;"></td>
            <td>{{perro.nombre}}</td>
			      <td>{{perro.descripcion}}</td>
			      <td><button class="btn btn-info"><i class="fas fa-edit"></i> Editar</button></td>
            
			    </tr>
			    
			  </tbody>
			</table>
      </div>
      <modal v-if="abierto" name="contestar" :clickToClose="false" height="auto" :scrollable="true">
           <div class="panel-footer pull-right" style="padding-right: 20px !important; padding-top: 10px !important;">
                 <button v-on:click="cerrar" type="button" class="btn btn-link"><i class="fas fa-times"></i></button>
             </div>
            <solicitud 
            v-bind:id_solicitud=this.id_solicitud
            v-bind:id_perro=this.id_perro></solicitud>
            
        </modal>
    </div>
    <!-- /#page-content-wrapper -->

  </div>

</template>
<script>
  import axios from 'axios'; 
  import Solicitud from './Solicitud'
  export default{
    data(){
      return{
          perros: []
      }
    },
    created: function(){
        axios.get('http://localhost:3000/mascotas')
            .then(response => {
                this.perros = response.data;     
            });
    },
    computed: {
     pendienteSolicitudes: function() {
       return this.solicitudes.filter(function(s) {
         return s.pendiente
         })
       } // contains only Alex and James
     },
     methods: {
      responder: function(id_solicitud, id_perro){
          this.id_solicitud = id_solicitud;
          this.id_perro = id_perro;
          this.abierto = true;
          this.$modal.show('contestar');
        },
        cerrar: function(){
          this.abierto = false;
          this.$modal.hide('contestar');
          axios.get('http://localhost:3000/solicitudes')
          .then(response => {
            this.solicitudes = response.data;
            axios.get('http://localhost:3000/mascotas')
            .then(response => {
              this.mascotas = response.data;
              for (var i = 0;i < this.solicitudes.length; i++) {
                for (var j = 0;j < this.mascotas.length; j++) {
                  if (this.solicitudes[i].perro_id == this.mascotas[j].id) {
                    this.$set(this.solicitudes[i], 'perro_nombre', this.mascotas[j].nombre);
                    } 
                  } 
                }
              });
          });
        }
     },
     components: {
      'solicitud': Solicitud
    }
  }
</script>
<style>
  /*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
body {
  overflow-x: hidden;
}
.card{
  padding: 10px !important;
}
.card-text{
  font-size: 18px;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 10px;
  font-size: 14px;
}
.sidebar-heading{
  margin-left: 1 px;
  border-bottom: 1px solid #dee2e6!important;
}
.fas{
  font-size: 20px;
  margin-left: 2px;
  margin-right: 5px;
}


#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }

  .d-flex{
    margin-top: -60px;
  }
}

.table{
  background-color: white;
}
#mascotas{
  border-top: 1px solid #dee2e6 !important;
}

h1{
  font-size: 20px;
}
.list-group-item-action{
  border: none !important;
  font-size: 14px;
}
a.bg-light:hover{
  background-color: rgb(149, 198, 175)!important;
}
.table td, .table th{
  vertical-align: middle !important;
}
</style>