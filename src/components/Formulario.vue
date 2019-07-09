<template>
	<div class="container row" style="padding: 20px !important;">
		
				  	<div v-if="tipo_adopcion==1" class="col-md-12">
				  		<h1 style="font-size: 20px;"><b>Formulario de adopción</b></h1>
				  		<form>
						  <div class="form-group">
						    <label for="nombre">Nombre</label>
						    <input type="name" class="form-control" id="nombre" aria-describedby="name" placeholder="Ingrese su nombre" v-model="nombre">
						    
						  </div>
						  <div class="form-group">
						    <label for="apellido">Apellido</label>
						    <input type="name" class="form-control" id="apellido" aria-describedby="apellido" placeholder="Ingrese su apellido" v-model="apellido">
						  </div>
						  <div class="form-group">
						    <label for="email">Email</label>
						    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Ingrese email" v-model="correo">
						    
						  </div>
						  <div class="form-group">
						    <label for="tel">Teléfono</label>
						    <input type="tel" class="form-control" id="tel" aria-describedby="tel" placeholder="Ingrese su teléfono" v-model="telefono">
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Cuéntanos por qué quieres adoptar</label>
						    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="descripcion"></textarea>
						  </div>
						  
						
						  <button type="submit" @click="adoptar" class="btn btn-primary">Enviar</button>
						</form>
				  	</div>

				  	<div v-if="tipo_adopcion==2" class="col-md-8">
				  		<h1 style="font-size: 20px;"><b>Formulario de adopción</b></h1>
				  		<form>
						  <div class="form-group">
						    <label for="nombre">Nombre</label>
						    <input type="name" class="form-control" id="nombre" aria-describedby="name" placeholder="Ingrese su nombre" v-model="nombre">
						    
						  </div>
						  <div class="form-group">
						    <label for="apellido">Apellido</label>
						    <input type="name" class="form-control" id="apellido" aria-describedby="apellido" placeholder="Ingrese su apellido" v-model="apellido">
						  </div>
						  <div class="form-group">
						    <label for="email">Email</label>
						    <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Ingrese email" v-model="correo">
						    
						  </div>
						  <div class="form-group">
						    <label for="tel">Teléfono</label>
						    <input type="tel" class="form-control" id="tel" aria-describedby="tel" placeholder="Ingrese su teléfono" v-model="telefono">
						  </div>
						  <div class="form-group">
						    <label for="exampleFormControlTextarea1">Cuéntanos por qué quieres adoptar</label>
						    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="descripcion"></textarea>
						  </div>
						  
						
						  <button type="submit" @click="adoptar" class="btn btn-primary">Enviar</button>
						</form>
				  	</div>
				  <div v-if="tipo_adopcion==2" class="col-md-4 text-center">
				  	<div class="card col-md-12" style="width: 20rem; margin-top: 72px;">
					  <img :src=perro.url class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title text-center"><b>{{perro.nombre}}</b></h5>
					    <p class="card-text">{{perro.descripcion}}</p>
					   
					  </div>
				   </div>
				</div>


				 
		
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				perro: {},
				nombre: '',
				apellido: '',
				correo: '',
				telefono: '',
				descripcion: '',
				perro_id: 0,
				pendiente: true
			}
		},
		props:['tipo_adopcion', 'perroSeleccionado'],
		created: function(){
			axios.get('http://localhost:3000/mascotas/'+ this.perroSeleccionado)
            .then(response => {
                this.perro = response.data; 
                this.perro_id = this.perroSeleccionado    
            });
		},
		methods: {
			adoptar: function(){
				var datos = {
					nombre: this.nombre,
					apellido: this.apellido,
					correo: this.correo,
					telefono: this.telefono,
					descripcion: this.descripcion,
					perro_id: this.perro_id,
					pendiente: this.pendiente		
				}
				axios.post('http://localhost:3000/solicitudes', datos)
				.then(response => {
					console.log('se hizo');
					this.$emit('exit', true);
				});
			}
		}

	}
</script>