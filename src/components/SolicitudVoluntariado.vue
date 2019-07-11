<template>
<div class="container row" style="padding: 20px !important;">
		
				  	<div class="col-md-12">
				  		<h1 style="font-size: 20px;"><b>Solicitud de adopción</b></h1>
				  		<form>
						  <div class="form-group">
						    <label for="nombre">Nombre:</label>
						    <p>{{solicitud.nombre}} {{solicitud.apellido}}</p>
						    
						  </div>
						  <div class="form-group">
						    <label for="apellido">Correo:</label>
						 <p>{{solicitud.correo}}</p>
						  </div>
						  <div class="form-group">
						    <label for="email">Teléfono</label>
						 <p>{{solicitud.telefono}}</p>
						    
						  </div>
						  
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Comentario:</label>
						     <p>{{solicitud.descripcion}}</p>
						  </div>
						  
						  <button @click="responder()" class="btn btn-success pull-right">Marcar como respondida</button>
						 
						</form>
				  	</div> 
		
	</div>
</template>
<script>
  	import axios from 'axios';
	export default{
		data(){
			return{
				solicitud: {}
			}
		},
		props:['id_voluntariado'],
		created: function(){
			axios.get('http://localhost:3000/voluntariados/'+ this.id_voluntariado)
            .then(response => {
                this.solicitud = response.data;
                console.log(this.solicitud);   
            });
		},
		methods: {
			responder: function(){
				axios.get('http://localhost:3000/voluntariados/'+ this.id_voluntariado)
	            .then(response => {
	                var solicitudActual = response.data;
	                solicitudActual.pendiente = false;
                	axios.put('http://localhost:3000/voluntariados/' + this.id_voluntariado, solicitudActual)
	                	.then(response => {
	                		console.log('éxito');
	                		this.$emit('exit', true);

	                	})   
	            });
			}
		}
	}
</script>	