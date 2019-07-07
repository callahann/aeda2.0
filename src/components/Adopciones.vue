<template>
  <div>
    <div class="row" style="margin-left: 100px; margin-right:100px;" >

			<div class="parrafoizq col-md-6">
				<h1 class="col-md-12"><b>¿Cómo adoptar?</b></h1>
				<p class="col-md-12">Sólo debes tener las ganas y compromiso que significa un nuevo miembro de tu familia, si crees que cumples con ello, solo debes contactarnos a través del formulario y contarnos por qué quieres adoptar y nosotros nos comunicaremos contigo a la brevedad.</p>
				
				
			</div>

			<div class="parrafoder col-md-6">
			    <div class="boton col-md-6 text-center">
			    	<a href="#" @click="adoptarGeneral" class="btn btn-success" role="button"><b>¡Quiero adoptar!</b></a>
			    </div>
				
				
				

			</div>
			
				<div v-for="perro in perros" class="col-md-3 text-center">
					<div class="card col-md-12" style="width: 18rem; cursor:pointer;">
					  <img @click="adoptarEspecifico(perro.id)" :src=perro.url class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title text-center"><b>{{perro.nombre}}</b></h5>
					    <p class="card-text">{{perro.descripcion}}</p>
					   
					  </div>
				   </div>
				</div>

				
				<modal v-if="abierto" name="adoptar" :clickToClose="false" :width="800" height="auto" :scrollable="true">
					 <div class="panel-footer pull-right" style="padding-right: 20px !important; padding-top: 10px !important;">
				  	 	   <button v-on:click="cerrar" type="button" class="btn btn-link"><i class="fas fa-times"></i></button>
				  	 </div>
				  	<formulario 
				  	v-bind:tipo_adopcion=this.tipo_adopcion
				  	v-bind:perroSeleccionado=this.perroSeleccionado></formulario>
				  	
				</modal>

		</div>
  </div>
</template>
<style>
	.card:hover{
		background-color:rgba(173, 234, 206,0.3);
	}
</style>
<script>
	import axios from 'axios';
	import Formulario from './Formulario'
  	export default{
    	data(){
	      return{
	      	perros: [],
	      	abierto: false,
	      	tipo_adopcion: '',
	      	perroSeleccionado: 0
	      }
	    },
	    created: function(){
	    	axios.get('http://localhost:3000/mascotas')
            .then(response => {
                this.perros = response.data;     
            });
	    },
	    methods:{
	    	adoptarGeneral: function(){
	    		this.perroSeleccionado = 0;
	    		this.abierto = true;
	    		this.tipo_adopcion = 1;
	    		this.$modal.show('adoptar');
	    	},
	    	adoptarEspecifico: function(id){
	    		this.perroSeleccionado = id;
	    		this.abierto = true;
	    		console.log(id);
	    		this.tipo_adopcion = 2;
	    		this.$modal.show('adoptar');
	    	},
	    	cerrar: function(){
	    		this.abierto = false;
	    		this.$modal.hide('adoptar');
	    	}
	    },
	    components: {
			'formulario': Formulario
		}
	  }
</script>