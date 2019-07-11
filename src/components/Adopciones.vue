<template>
  <div>
  	<Nav v-bind:activo="2" style="margin-top: -61px;"></Nav>
    <div class="row" style="margin-left: 100px; margin-right:100px;" >

			<div class="parrafoizq col-md-6">
				<h1 class="col-md-12"><b>¿Cómo adoptar?</b></h1>
				<p class="col-md-12">Sólo debes tener las ganas y compromiso que significa un nuevo miembro de tu familia, si crees que cumples con ello, solo debes contactarnos a través del formulario y contarnos por qué quieres adoptar y nosotros nos comunicaremos contigo a la brevedad.</p>
				
				
			</div>

			<div class="parrafoder col-md-6">
			    <div class="boton col-md-6 text-center">
			    	<a @click="adoptarGeneral" class="btn btn-success" role="button"><b>¡Quiero adoptar!</b></a>
			    </div>
				
				
				

			</div>
			
				<div v-for="perro in perrosActivos" class="col-md-3 text-center">
					<div @click="adoptarEspecifico(perro.id)"  class="card col-md-12" style="width: 18rem; cursor:pointer;">
					  <img :src=perro.url class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title text-center"><b>{{perro.nombre}}</b></h5>
					    <p class="card-text">{{perro.descripcion}}</p>
					   
					  </div>
				   </div>
				</div>
				<div class="parrafoder col-md-12">
			<h1 class="col-md-6 text-left"><b>Testimonios</b></h1>

			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Carousel indicators -->
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div><i class="fas fa-quote-left" style="font-size: 40px; color:rgb(40, 133, 135) !important;"></i></div>
						<p class="testimonial text-center">{{testimonios[0].texto}}</p>
						<p class="overview"><b>{{testimonios[0].nombre}}</b></p>
					</div>
					<div v-for="testimonio in testimonios.slice(1, 4)" class="item carousel-item ">
						<div><i class="fas fa-quote-left" style="font-size: 40px; color:rgb(40, 133, 135) !important;"></i></div>
						<p class="testimonial text-center">{{testimonio.texto}}</p>
						<p class="overview"><b>{{testimonio.nombre}}</b></p>
					</div>
					
					
				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
			
    		<notifications group="ingresado" />

			</div> 

				
				<modal v-if="abierto" name="adoptar" :clickToClose="false" :width="800" height="auto" :scrollable="true">
					 <div class="panel-footer pull-right text-right" style="padding-right: 20px !important; padding-top: 10px !important;">
				  	 	   <button v-on:click="cerrar" type="button" class="btn btn-link"><i class="fas fa-times"></i></button>
				  	 </div>
				  	<formulario @exit="closeModal"
				  	v-bind:tipo_adopcion=this.tipo_adopcion
				  	v-bind:perroSeleccionado=this.perroSeleccionado></formulario>
				  	
				</modal>

		</div>
  </div>
</template>
<style type="text/css">

h2 {
	color: #333;
	text-align: center;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	position: relative;
	margin: 30px 0 60px;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 3px;
	background: #8fbc54;
	left: 0;
	right: 0;
	bottom: -10px;
}

	.card:hover{
		background-color:rgba(173, 234, 206,0.3);
	}
.testimonial{
	font-family: 'Arapey', serif !important;
	font-size: 30px !important;
	color:rgb(24, 137, 64) !important;
}
</style>
<script>
	import axios from 'axios';
	import Formulario from './Formulario'
	import Nav from '@/components/Nav.vue'
  	export default{
    	data(){
	      return{
	      	perros: [],
	      	abierto: false,
	      	tipo_adopcion: '',
	      	perroSeleccionado: 0,
	      	testimonios:[]
	      }
	    },
	    created: function(){
	    	axios.get('http://localhost:3000/mascotas')
            .then(response => {
                this.perros = response.data;     
            });
            axios.get('http://localhost:3000/testimoniosadopcion')
            .then(response => {
                this.testimonios = response.data;     
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
	    	},
	    	closeModal: function(){	
	    		this.abierto = false;
	    		this.$modal.hide('adoptar');
	    		this.$notify({
		            group: 'ingresado',
		            title: '¡Solicitud enviada!',
		            text: 'Tu solicitud ha sido enviada con éxito.'
		          });
	    	}
	    },
	    components: {
			'formulario': Formulario,
			'Nav': Nav
		},
		computed: {
	      perrosActivos: function() {
	       return this.perros.filter(function(p) {
	         return p.disponible
	         })
	       }
	    }
	  }
</script>