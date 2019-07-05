<template>
	<div>		 
		<p>{{solicitud.nombre}} {{solicitud.apellido}}</p>
		<p>{{solicitud.descripcion}}</p>
		<p>{{perro.nombre}}</p>
		<p>{{solicitud.correo}}</p>
		<p>{{solicitud.telefono}}</p>
		<button @click="responder(solicitud.id)">Marcar como respondida</button>
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
	                	})   
	            });
			}
		}

	}
</script>