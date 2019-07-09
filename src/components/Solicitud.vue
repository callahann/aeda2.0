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
						    <label v-if="perro.nombre!=null" for="tel">Mascota que desea adoptar:</label>
						    <p  v-if="perro.nombre!=null">{{perro.nombre}}</p>
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Comentario:</label>
						    <p>{{solicitud.descripcion}}</p>
						  </div>
						  
						  <button @click="responder(solicitud.id)" class="btn btn-success pull-right">Marcar como respondida</button>
						 
						</form>
				  	</div> 
		
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				perro: {},
				solicitud: {}
			}
		},
		props:['id_solicitud', 'id_perro'],
		created: function(){
			axios.get('http://localhost:3000/solicitudes/'+ this.id_solicitud)
            .then(response => {
                this.solicitud = response.data;   
            });
            axios.get('http://localhost:3000/mascotas/'+ this.id_perro)
            .then(response => {
                this.perro = response.data;   
            });
		},
		methods: {
			responder: function(){
				axios.get('http://localhost:3000/solicitudes/'+ this.id_solicitud)
	            .then(response => {
	                var solicitudActual = response.data;
	                solicitudActual.pendiente = false;
                	axios.put('http://localhost:3000/solicitudes/' + this.id_solicitud, solicitudActual)
	                	.then(response => {
	                		console.log('éxito');
	                		this.$emit('exit', true);

	                	})   
	            });
			}
		}

	}
</script>