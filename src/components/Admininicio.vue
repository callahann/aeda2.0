<template>
 

  <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading text-left">Solicitudes</div>
      <div class="list-group list-group-flush ">
          <a href="/admin/adopciones" class="list-group-item list-group-item-action bg-light text-right">Adopciones</a>
          <a href="#" class="list-group-item list-group-item-action bg-light text-right">Voluntariado</a>
          <a href="#" class="list-group-item list-group-item-action bg-light text-right">Donaciones</a>
        <a href="#" class="sidebar-heading list-group-item list-group-item-action bg-light text-left">Mascotas</a>
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

          <div class="card col-md-6" style="height: 100px !important;">
          <div class="card-body">
           <div class="card-title"> <b>Actividad de la página</b></div>
           <div class="card-text text-left"></div>
          </div>
          </div>
          <div class="card col-md-6" style="height: 100px !important;">
          <div class="card-body">
           <div class="card-title"> <b>Actividad de la página</b></div>
           <!-- Contador de visitas -->
<center><a  title="">
<img style="border: 0px solid; display: inline;" alt="contador de visitas" src="http://www.websmultimedia.com/contador-de-visitas.php?id=268229"></a><br></center>
<!-- Fin Contador de visitas -->
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
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
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

h1{
  font-size: 20px;
}

</style>