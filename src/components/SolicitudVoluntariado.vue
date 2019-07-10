<template>
<div class="container row" style="padding: 20px !important;">
		
				  	<div class="col-md-12">
				  		<h1 style="font-size: 20px;"><b>Solicitud de adopción</b></h1>
				  		<form>
						  <div class="form-group">
						    <label for="nombre">Nombre:</label>
						    <p>aqui va el nombre desde la bd</p>
						    
						  </div>
						  <div class="form-group">
						    <label for="apellido">Correo:</label>
						 <p>aqui va el correo desde la bd</p>
						  </div>
						  <div class="form-group">
						    <label for="email">Teléfono</label>
						 <p>aqui va el telefono desde la bd</p>
						    
						  </div>
						  
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Comentario:</label>
						     <p>aqui va el comentario desde la bd</p>
						  </div>
						  
						  <button @click="responder(solicitud.id)" class="btn btn-success pull-right">Marcar como respondida</button>
						 
						</form>
				  	</div> 
		
	</div>
</template>
<script>
	export default{
		props:['id_voluntariado']
	}
</script>	