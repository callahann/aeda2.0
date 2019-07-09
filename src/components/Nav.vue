<template>
	<!-- Barra de navegación -->

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#/admin"><img src="../assets/images/aeda_png.png" alt="Logo AEDA" style="height:70px;"></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse row" id="navbarNav">
			 <div class="col-md-7"></div>
			<ul class="navbar-nav col-md-5" >
			  <li class="nav-item active">
			    <a class="nav-link" href="#/">Inicio<span class="sr-only">(current)</span></a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#/adopciones">Adopciones</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#">Donaciones</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#/voluntariado">Voluntariado</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#">¿Quiénes somos?</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="#">Actividades</a>
			  </li>
			 
			</ul>
		</div>
	</nav>

	<!-- FIN Barra de navegación -->
</template>
<script>
	import axios from 'axios';
  	export default{
    	data(){
	     
	      }
	    }

</script>