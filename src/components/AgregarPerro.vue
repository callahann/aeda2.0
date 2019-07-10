<template>
	<div class="container row" style="padding: 20px !important; margin-top: -30px;">
		
	<div class="col-md-12">
		<h1 style="font-size: 20px;"><b>Añadir mascota</b></h1>
		<form>
		  <div class="form-group">
		    <label for="nombre">Nombre</label>
		    <input type="name" class="form-control" id="nombre" aria-describedby="name" placeholder="Ingrese su nombre" v-model="nombre">
		     <div class="form-group">
		    <label for="exampleFormControlTextarea1">Descripción</label>
		    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
		  </div>
		    
		  </div>
		  <div class="form-group">
		    <label for="exampleFormControlFile1">Subir imagen de la mascota</label>
		    <input type="file" class="form-control-file" id="exampleFormControlFile1">
		  </div>
		</form>
		 </div>
	</div>
</template>
<script>
	export default{

	}
</script>