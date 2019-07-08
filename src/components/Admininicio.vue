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

      

      <div class="container" style="margin-top: 20px;">
        <div class="row">
          <div class="card col-md-12" style="height: 100px !important;">
          <div class="card-body">
           <div class="card-title"> <b>¡Bienvenido!</b></div>
           <div class="card-text text-left">Desde aquí podrás configurar el contenido de la página</div>
          </div>
          </div>



        </div>
        
         
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>

</template>
<script>
  export default{
    data(){
      return{
      }
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
</style>