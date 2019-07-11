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
		    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="descripcion"></textarea>
		  </div>
		    
		  </div>
		  <div class="form-group">
		    <label for="exampleFormControlFile1">Subir imagen de la mascota</label>
		    <input type="file" class="form-control-file" id="exampleFormControlFile1">
		  </div>
		  <button type="submit" @click="subir" class="btn btn-primary">Enviar</button>
		</form>
		 </div>
	</div>
</template>
<script>
  	import axios from 'axios';
	export default{
		data(){
			return{
				nombre: '',
				descripcion: '',
				url_id: ''
			}
		},
		created: function(){
			axios.get('http://localhost:3000/contador/0')
            .then(response => {
                this.url_id = response.data.numero + 1;
            });
            axios.get('http://localhost:3000/contador/0')
            .then(response => {
                var contador = response.data;
                contador.numero=contador.numero+1;
                axios.put('http://localhost:3000/contador/0', contador)
	            .then(response=>{
	            	console.log('exito');
	            });
            });
            
		},
		methods:{
			subir: function(){
				var datos = {
					nombre: this.nombre,
					descripcion: this.descripcion,
					url: 'https://placedog.net/400/400/5' + this.url_id,
					disponible: true
				}
				axios.post('http://localhost:3000/mascotas', datos)
				.then(response => {
					console.log('se hizo');
					this.$emit('exit', true);
				});
			}
		}
	}
</script>