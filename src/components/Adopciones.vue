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
						<div><i class="fas fa-quote-left" style="font-size: 40px;"></i></div>
						<p class="testimonial text-center">{{testimonios[0].texto}}</p>
						<p class="overview"><b>{{testimonios[0].nombre}}</b></p>
					</div>
					<div v-for="testimonio in testimonios.slice(1, 4)" class="item carousel-item ">
						<div><i class="fas fa-quote-left" style="font-size: 40px;"></i></div>
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
<style type="text/css">
body {
	font-family: "Open Sans", sans-serif;
}
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
.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
.carousel .item {
	color: #999;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 290px;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #7AA641;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 68px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #555;		
	box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
</style>
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
	    	}
	    },
	    components: {
			'formulario': Formulario
		}
	  }
</script>