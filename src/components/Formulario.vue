<template>
	<div class="container" style="padding: 20px !important;">
		
				  	<h1 style="font-size: 18px;"><b>Formulario de adopción</b></h1>
				  		<form>
						  <div class="form-group">
						    <label for="nombre">Nombre</label>
						    <input type="name" class="form-control" id="nombre" aria-describedby="name" placeholder="Ingrese su nombre">
						    
						  </div>
						  <div class="form-group">
						    <label for="apellido">Apellido</label>
						    <input type="name" class="form-control" id="apellido" aria-describedby="apellido" placeholder="Ingrese su apellido">
						  </div>
						  <div class="form-group">
						    <label for="email">Email</label>
						    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Ingrese email">
						    
						  </div>
						  <div class="form-group">
						    <label for="tel">Teléfono</label>
						    <input type="tel" class="form-control" id="tel" aria-describedby="tel" placeholder="Ingrese su teléfono">
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Cuéntanos por qué quieres adoptar</label>
						    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						  </div>
						  
						
						  <button type="submit" class="btn btn-primary">Enviar</button>
						</form>
				  <div class="col-md-3 text-center">
					<div class="card col-md-12" style="width: 18rem;">
					  <!-- <img src="images/tigrito.png" class="card-img-top" alt="..."> -->
					  <div class="card-body">
					    <h5 class="card-title text-center"><b>Tigrito</b></h5>
					    <p class="card-text">Es regalón, le encanta jugar, se lleva bien con niños y te seguirá a donde sea, aunque su amor es celoso con otros perritos</p>
					   
					  </div>
				   </div>
				</div>


				 
		{{this.tipo_adopcion}}	
	</div>
</template>
<script>
	export default{
		props:['tipo_adopcion']

	}
</script>