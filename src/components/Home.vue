<template>
  <div>	
  	 <Nav v-bind:activo="1" style="margin-top: -61px;"></Nav>
    <div class="row" style="margin-left: 100px; margin-right:100px;" >
			<div class="col-md-8">
			<img src="../assets/images/campana_llegoelfrio.jpg" alt="Campaña llegó el frío" style="width:100%; margin-top: 20px; margin-bottom: 50px;">

			<!-- Cada noticia-->
			<div v-for="noticia in noticias"  class="noticias col"> 
				<div class="row">
					<div class="col-md-7">
						<div class="fecha col-md-12 text-left"> {{noticia.fecha}} </div>
						<div class="fecha col-md-12 text-left"> <b>{{noticia.titulo}}</b> </div>
						<div class="cuerpo col-md-12 text-justify">{{noticia.texto}}</div>
					</div>
				
					<div class="col md-5">
						<img class="imagennoticia" :src=noticia.imagen alt="">
					</div>
				</div>

			</div>
		
			
			</div>
			<div class="col-md-1"></div>
			<div class="aside col-md-3" style="margin-top: 20px; margin-bottom: 50px;">
				
				<div v-for="perro in perros.slice(0, 4)" class="perritos col">
					<img class="perrito" :src=perro.url alt="">
					
				</div>

			</div>
			
		</div>
  </div>
</template>
<script>
	import axios from 'axios';
	import Nav from '@/components/Nav.vue'

  	export default{
    	data(){
	      return{
	      	perros: [],
	      	noticias: []
	      }
	    },
	    created: function(){
	    	axios.get('http://localhost:3000/mascotas')
	            .then(response => {
	                this.perros = response.data;     
	            });
	            axios.get('http://localhost:3000/noticias')
	            .then(response => {
	                this.noticias = response.data;     
	            });
	    },
	     components: {
			'Nav': Nav
		},

	  }
</script>